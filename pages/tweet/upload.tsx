import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Tweet } from '@prisma/client';
import useMutation from '../../lib/useMutation';

interface UploadProductForm {
  message?: string;
}

interface UploadProductMutaion {
  status: string;
  tweet: Tweet;
}

const Upload: NextPage = () => {
  const { register, handleSubmit } = useForm<UploadProductForm>();
  const [uploadTweet, { loading, data }] =
    useMutation<UploadProductMutaion>('/api/tweet');
  const router = useRouter();

  const onValid = async (data: UploadProductForm) => {
    if (loading) return;
    uploadTweet(data);
  };

  useEffect(() => {
    if (data?.status === 'success') {
      router.push(`/tweet/${data.tweet.id}`);
    }
  }, [data, router]);

  return (
    <div className='flex h-auto w-full items-center justify-center p-12'>
      <form
        className='bg-pink-100 p-4 w-full max-w-sm rounded-3xl border-2 border-b-4 border-r-4 border-black'
        onSubmit={handleSubmit(onValid)}>
        <textarea
          {...register('message', { required: true })}
          name='message'
          className='border-2 border-black rounded-lg w-full resize-none min-h-[200px] p-3'
          placeholder='내용을 입력하세요.'
          required
        />
        <button className='bg-yellow-400 px-5 py-2 flex justify-center items-center w-full rounded-lg border-2 border-b-4 border-r-4 border-black font-bold'>
          {loading ? 'Loading' : 'Upload Tweet'}
        </button>
      </form>
    </div>
  );
};

export default Upload;
