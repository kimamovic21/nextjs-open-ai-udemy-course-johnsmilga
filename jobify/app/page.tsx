import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/logo.svg';
import LandingImg from '../assets/main.svg';

export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 '>
        <Image src={Logo} alt='logo' />
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
        <div>
          <h1 className='capitalize text-4xl md:text-7xl font-bold'>
            <span className='mr-2'>job</span>
            <span className='text-primary'>tracking</span> 
            <span className='ml-2'>App</span>
          </h1>
          <p className='leading-loose max-w-md mt-4 '>
            The Jobify project is a full-stack job tracking application built using the Next.js Framework.
            It allows users to manage job applications efficiently by providing features such as job creation, 
            updating, and deletion. Users can track their job position, job status, job type, job location and 
            company name offering an organized way to manage their job hunt.
          </p>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image 
          src={LandingImg} 
          alt='landing' 
          className='hidden lg:block ' 
        />
      </section>
    </main>
  );
};
