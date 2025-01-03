import { getStatsAction } from '@/utils/actions';

async function StatsPage() {
  const stats = await getStatsAction();
  console.log('Stats:', stats);

  return (
    <div>StatsPage</div>
  );
};

export default StatsPage;