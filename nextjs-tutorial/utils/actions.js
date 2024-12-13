'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from '@/utils/db';

export const getAllTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const createTask = async (formData) => {
  const content = formData.get('content');

  await prisma.task.create({
    data: {
      content,
    },
  });
  
  revalidatePath('/tasks');
};

export const deleteTask = async (formData) => {
  const id = formData.get('id');
  await prisma.task.delete({ where: { id } });
  revalidatePath('/tasks');
};

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const editTask = async (formData) => {
  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed');

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      content: content,
      completed: completed === 'on' ? true : false,
    },
  });

  redirect('/tasks');
};

export const createTaskCustom = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const content = formData.get('content');
  
  try {
    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath('/tasks');

    return { message: 'success!!!' };
  } catch (error) {
    return { message: 'error...' };
  };
};