import Link from 'next/link';
import Image from 'next/image';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch drink...');
  };

  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        back to drinks
      </Link>
      <Image 
        src={imgSrc} 
        alt={title} 
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg mb-4' 
        priority
      />
      {/* <Image 
        src={drinkImg} 
        className='w-48 h-48 rounded-lg' 
        alt='drink' 
      /> */}
      <h2 className='text-4xl mb-8'>
        {title}
      </h2>
    </div>
  );
};

export default SingleDrinkPage;