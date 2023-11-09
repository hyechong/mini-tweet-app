import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  name: string;
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
      setLoading(true);
      const request = await fetch('/api/users/createAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (request.status === 200) {
        alert('이미 존재하는 계정입니다. 로그인해주세요');
      }
      if (request.status === 201) {
        alert('계정이 생성되었습니다. 로그인해주세요');
      }
      if (request.status !== 405) {
        router.push('/log-in');
      }

      setLoading(false);
    }
  };
  return (
    <div className='flex h-auto w-full items-center justify-center p-12'>
      <div className='bg-pink-100 p-4 w-full max-w-sm rounded-3xl border-2 border-b-4 border-r-4 border-black space-y-3'>
        <h1 className='text-xl font-extrabold flex justify-center items-center'>
          Create Account
        </h1>
        <form className='font-bold space-y-3' onSubmit={handleSubmit(onValid)}>
          <div>
            <label htmlFor='name'>Name: </label>
            <input
              className='bg-inherit'
              type='text'
              {...register('name', { required: '이름을 입력하세요' })}
            />
            <span>{errors?.name?.message}</span>
          </div>
          <div>
            <label htmlFor='email'>Email: </label>
            <input
              className='bg-inherit'
              type='email'
              {...register('email', { required: '이메일을 입력하세요' })}
            />
            <span>{errors?.email?.message}</span>
          </div>
          <button className='bg-yellow-400 px-5 py-2 flex justify-center items-center w-full rounded-lg border-2 border-b-4 border-r-4 border-black font-bold'>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};
