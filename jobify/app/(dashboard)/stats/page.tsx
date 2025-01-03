import {
  dehydrate,
  QueryClient,
  HydrationBoundary
} from '@tanstack/react-query';
import { getChartsDataAction, getStatsAction } from '@/utils/actions';
import ChartsContainer from '@/components/ChartsContainer';
import StatsContainer from '@/components/StatsContainer';

async function StatsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['stats'],
    queryFn: () => getStatsAction(),
  });
  await queryClient.prefetchQuery({
    queryKey: ['charts'],
    queryFn: () => getChartsDataAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StatsContainer />
      <ChartsContainer />
    </HydrationBoundary>
  );
};

export default StatsPage;