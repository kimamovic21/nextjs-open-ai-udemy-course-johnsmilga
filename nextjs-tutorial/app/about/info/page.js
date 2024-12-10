import Link from 'next/link';

const AboutInfoPage = () => {
  return (
    <div>
      <h2 className='text-7xl'>
        About Page
      </h2>
      <Link href='/about' className='text-2xl'>
        about page
      </Link>
    </div>
  );
};

export default AboutInfoPage;