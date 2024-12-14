import prisma from '@/utils/db';

const prismaHandlers = async () => {
//  console.log('prisma example');
 
  // await prisma.task.create({
  //   data: {
  //     content: 'wake up',
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return allTasks;
};

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();

  if (tasks.length === 0) {
    return <h2 className='mt-8 font-medium text-lg'>No tasks to show...</h2>;
  };

  return (
    <div>
      <h2 className='text-3xl font-medium mb-4'>
        Prisma Example Page
      </h2>
      {tasks?.map((task) => {
        return (
          <h2 key={task.id} className='text-xl py-2'>
            😬 {task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExamplePage;