import type { NextPage } from 'next';
import { Tweet, User } from '@prisma/client';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import useMutation from '../../lib/useMutation';
import { cls } from '../../lib/utils';

interface TweetWithUser extends Tweet {
  user: User;
}

interface TweetDetailResponse {
  status: string;
  tweet: TweetWithUser;
  isLiked: boolean;
}

const TweetDetail: NextPage = () => {
  const router = useRouter();
  const goBackHandler = () => {
    router.push('/');
  };
  const { data, mutate } = useSWR<TweetDetailResponse>(
    router.query.id ? `/api/tweet/${router.query.id}` : null
  );

  const [toggleLike] = useMutation(`/api/tweet/${router.query.id}/like`);
  const onLikeClick = () => {
    if (!data) return;
    mutate({ ...data, isLiked: !data.isLiked }, false);
    toggleLike({});
  };

  return (
    <div className='flex h-auto w-full items-center justify-center p-12'>
      <div className='bg-pink-100 p-4 w-full max-w-sm rounded-3xl border-2 border-b-4 border-r-4 border-black space-y-3'>
        <button onClick={goBackHandler}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            stroke-width='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'></path>
          </svg>
        </button>
        <div className='font-bold'>{data?.tweet.user.name} : </div>
        <div className='border-2 bg-white border-black rounded-lg w-full resize-none min-h-[200px] p-3 font-medium'>
          {data?.tweet.message}
        </div>
        <button
          onClick={onLikeClick}
          className='bg-yellow-400 px-5 py-2 flex justify-center items-center w-full rounded-lg border-2 border-b-4 border-r-4 border-black font-bold'>
          <svg
            className='w-7 h-7'
            fill={data?.isLiked ? 'red' : 'gray'}
            stroke='none'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TweetDetail;
