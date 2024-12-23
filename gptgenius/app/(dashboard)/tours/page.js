import { dehydrate, QueryClient, HydrationBoundary } from '@tanstack/react-query';
import { getAllTours } from '@/utils/actions';
import ToursPage from '@/components/ToursPage';

const AllToursPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['tours', ''],
    queryFn: () => getAllTours(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ToursPage />
    </HydrationBoundary>
  );
};

export default AllToursPage;