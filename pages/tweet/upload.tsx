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
    <form className='p-4 space-y-4' onSubmit={handleSubmit(onValid)}>
      <textarea
        {...register('message', { required: true })}
        name='message'
        className='border-2 border-[#FC5200] w-full resize-none min-h-[100px] placeholder:pt-1 pl-2'
        placeholder='Write Your Text'
        required
      />
      <button className='w-full  h-9 bg-[#FC5200] hover:bg-orange-600 text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none'>
        {loading ? 'Loading' : 'Upload Tweet'}
      </button>
    </form>
  );
};

export default Upload;
