'use client';

import { getAllTours } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';
import ToursList from './ToursList';

const ToursPage = () => {
  const { data, isPending } = useQuery({
    queryKey: ['tours'],
    queryFn: () => getAllTours(),
  });

  return (
    <>
      {isPending ? (
        <span className=' loading'></span>
      ) : (
        <ToursList data={data} />
      )}
    </>
  );
};

export default ToursPage;