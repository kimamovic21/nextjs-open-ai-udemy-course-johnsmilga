'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { JobStatus } from '@/utils/types';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function SearchForm() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const jobStatus = searchParams.get('jobStatus') || 'all';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;
    const jobStatus = formData.get('jobStatus') as string;
    console.log('Search:',search);
    console.log('Job Status:', jobStatus);
  };

  return (
    <form
      className='bg-muted mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg'
      onSubmit={handleSubmit}
    >
      <Input
        type='text'
        placeholder='Search Jobs'
        name='search'
        defaultValue={search}
      />

      <Select name='jobStatus' defaultValue={jobStatus}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {['all', ...Object.values(JobStatus)].map((jobStatus) => {
            return (
              <SelectItem key={jobStatus} value={jobStatus}>
                {jobStatus}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      <Button type='submit'>Search</Button>
    </form>
  );
};

export default SearchForm;