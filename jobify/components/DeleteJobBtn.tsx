import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { deleteJobAction } from '@/utils/actions';
import { Button } from './ui/button';

function DeleteJobBtn({ id }: { id: string }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: 'there was an error' });
        return;
      };

      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
      queryClient.invalidateQueries({ queryKey: ['charts'] });

      toast({ description: 'job removed' });
    },
  });

  return (
    <Button
      size='sm'
      disabled={isPending}
      onClick={() => mutate(id)}
    >
      {isPending ? 'deleting...' : 'delete'}
    </Button>
  );
};

export default DeleteJobBtn;