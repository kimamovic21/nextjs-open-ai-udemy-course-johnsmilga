'use client';

import { editTask } from '@/utils/actions';

const EditForm = ({ task }) => {
  const { id, completed, content } = task;
  
  return (
    <form
      action={editTask}
      className='max-w-sm bg-base-100 p-12 border border-base-300  rounded-lg'
    >
      <input type='hidden' name='id' value={id} />

      <input
        type='text'
        name='content'
        className='input input-bordered w-full'
        defaultValue={content}
        required
      />

      <div className='form-control my-4'>
        <label className='label cursor-pointer'>
          <span className='label-text'>Completed</span>
          <input
            id='completed'
            type='checkbox'
            name='completed'
            className='checkbox checkbox-primary checkbox-sm'
            defaultChecked={completed}
          />
        </label>
      </div>

      <button className='btn btn-primary btn-block btn-sm'>
        edit
      </button>
    </form>
  );
};

export default EditForm;