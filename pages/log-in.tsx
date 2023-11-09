import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  email: string;
}

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onValid = async (data: IForm) => {
    if (!loading) {
      const request = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (request.status === 200) {
        router.push('/');
      } else {
        setLoading(false);
      }
    }
  };
  return (
    <div className='flex h-auto w-full items-center justify-center p-12'>
      <div className='bg-pink-100 p-4 w-full max-w-sm rounded-3xl border-2 border-b-4 border-r-4 border-black space-y-3'>
        <h1 className='text-xl font-extrabold flex justify-center items-center'>
          Login
        </h1>
        <form className='font-bold space-y-3' onSubmit={handleSubmit(onValid)}>
          <div>
            <label htmlFor='email'>Email: </label>
            <input
              className='bg-inherit'
              type='email'
              {...register('email', { required: '이메일을 입력하세요.' })}
            />
            <span>{errors?.email?.message}</span>
          </div>
          <button className='bg-yellow-400 px-5 py-2 flex justify-center items-center w-full rounded-lg border-2 border-b-4 border-r-4 border-black font-bold'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
