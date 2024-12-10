import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl'>
        Home Page
      </h1>
      <Link href='/about' className='text-2xl'>
        about page
      </Link>
    </div>
  );
};

export default HomePage;