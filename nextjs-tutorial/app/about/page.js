import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h2 className='text-7xl'>
        About Page
      </h2>
      <Link href='/' className='text-2xl'>
        home page
      </Link>
      <Link href='/about/info' className='text-2xl ml-2'>
        about info
      </Link>
    </div>
  );
};

export default AboutPage;