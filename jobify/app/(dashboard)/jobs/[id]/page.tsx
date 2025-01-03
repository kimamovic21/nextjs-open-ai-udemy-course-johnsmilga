import {
  dehydrate,
  QueryClient,
  HydrationBoundary
} from '@tanstack/react-query';
import { getSingleJobAction } from '@/utils/actions';
import EditJobForm from '@/components/EditJobForm';

async function JobDetailPage({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['job', params.id],
    queryFn: () => getSingleJobAction(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditJobForm jobId={params.id} />
    </HydrationBoundary>
  );
};

export default JobDetailPage;