'use server';

import prisma from '@/utils/db';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'you are a helpful assistant' },
        ...chatMessages,
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    });
    // console.log(response);
    // console.log(response.choices[0].message);
    return response.choices[0].message;
  } catch (error) {
    return null;
  };
};

export const generateTourResponse = async ({ city, country }) => {
  const query = `
    Find a ${city} in this ${country}.
    If ${city} in this ${country} exists, create a list of things families can do in this ${city},${country}. 
    Once you have a list, create a one-day tour. Response should be in the following JSON format: 
    {
      "tour": {
        "city": "${city}",
        "country": "${country}",
        "title": "title of the tour",
        "description": "description of the city and tour",
        "stops": ["short paragraph on the stop 1 ", "short paragraph on the stop 2","short paragraph on the stop 3"]
      }
    }
    If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is 
    not located in the following ${country} return { "tour": null }, with no additional characters.
  `;

  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'you are a tour guide' },
        { role: 'user', content: query },
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    });
  
    const tourData = JSON.parse(response.choices[0].message.content);

    if (!tourData.tour) {
      return null;
    };

    return tourData.tour;
  } catch (error) {
    console.error(error);
    return null;
  };
};

export const getExistingTour = async ({ city, country }) => {
  city = city.charAt(0).toUpperCase() + city.slice(1);
  country = country.charAt(0).toUpperCase() + country.slice(1);

  const tour = await prisma.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });

  if (tour) {
    return {
      ...tour,
      stops: JSON.parse(tour.stops), 
    };
  };

  return null;
};

export const createNewTour = async (tour) => {
  return prisma.tour.create({
    data: {
      ...tour,
      stops: JSON.stringify(tour.stops), 
    },
  });
};