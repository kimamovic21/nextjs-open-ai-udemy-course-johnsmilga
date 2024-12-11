import { createTask } from '@/utils/actions';

const TaskForm = async () => {
  return (
    <form action={createTask}>
      <div className='join w-full'>
        <input
          className='input input-bordered join-item w-full'
          placeholder='Type Here'
          type='text'
          name='content'
          required
        />
        <button type='submit' className='btn join-item btn-primary'>
          create task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;