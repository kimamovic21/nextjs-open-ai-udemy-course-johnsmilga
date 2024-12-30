'use server';

import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Prisma } from '@prisma/client';
import { 
  JobType, 
  CreateAndEditJobType,   
  createAndEditJobSchema 
} from './types';
import prisma from './db';
import dayjs from 'dayjs';

function authenticateAndRedirect(): string {
  const { userId } = auth();
  if (!userId) {
    redirect('/');
  };
  return userId;
};

export async function createJobAction(
  values: CreateAndEditJobType
): Promise<JobType | null> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const userId = authenticateAndRedirect();
  
  try {
    createAndEditJobSchema.parse(values);
    const job: JobType = await prisma.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });
    return job;
  } catch (error) {
    console.error(error);
    return null;
  };
};