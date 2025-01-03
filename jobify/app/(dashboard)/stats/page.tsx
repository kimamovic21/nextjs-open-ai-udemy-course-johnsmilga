import { getStatsAction, getChartsDataAction } from '@/utils/actions';

async function StatsPage() {
  const stats = await getStatsAction();
  console.log('Stats:', stats);
  const charts = await getChartsDataAction();
  console.log('Charts:', charts);

  return (
    <div>StatsPage</div>
  );
};

export default StatsPage;