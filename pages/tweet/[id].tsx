import type { NextPage } from 'next';
import { Tweet, User } from '@prisma/client';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import useMutation from '../../lib/useMutation';

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
    router.back();
  };
  const { data, mutate } = useSWR<TweetDetailResponse>(
    router.query.id ? `/api/tweet/${router.query.id}` : null
  );

  const [toggleLike] = useMutation(`/api/tweets/${router.query.id}/like`);
  const onLikeClick = () => {
    if (!data) return;
    mutate({ ...data, isLiked: !data.isLiked }, false);
    toggleLike({});
  };

  console.log(data);
  return (
    <div className='p-4 space-y-4'>
      <svg
        className='h-10 w-10'
        stroke='currentColor'
        version='1.1'
        viewBox='0 0 700 700'
        xmlns='http://www.w3.org/2000/svg'
        onClick={goBackHandler}>
        <path d='m350 18.668c-69.309 0-135.78 27.531-184.79 76.543-49.012 49.008-76.543 115.48-76.543 184.79s27.531 135.78 76.543 184.79c49.008 49.012 115.48 76.543 184.79 76.543s135.78-27.531 184.79-76.543c49.012-49.008 76.543-115.48 76.543-184.79 0-45.875-12.074-90.938-35.012-130.67-22.938-39.727-55.926-72.715-95.652-95.652-39.73-22.938-84.793-35.012-130.67-35.012zm87.156 415.46v-0.003906c3.7891 3.2812 6.1016 7.9531 6.4141 12.957 0.3125 5.0039-1.4023 9.9258-4.7578 13.652-3.3555 3.7266-8.0703 5.9453-13.078 6.1602-5.0117 0.21094-9.8945-1.6016-13.555-5.0273l-186.67-168c-3.9297-3.543-6.1719-8.582-6.1719-13.871s2.2422-10.328 6.1719-13.871l186.67-168c3.6602-3.4258 8.543-5.2383 13.555-5.0273 5.0078 0.21484 9.7227 2.4336 13.078 6.1602 3.3555 3.7266 5.0703 8.6484 4.7578 13.652-0.3125 5.0039-2.625 9.6758-6.4141 12.957l-171.16 154.13z' />
      </svg>
      <div className='font-bold'>{data?.tweet.user.name}</div>
      <div className='border-2 border-[#FC5200] w-full resize-none min-h-[100px] placeholder:pt-1 pl-2'>
        {data?.tweet.message}
      </div>
      <button
        onClick={onLikeClick}
        className='w-full flex items-center justify-center h-9 boder-1 border-[#FC5200] text-white  px-4 border border-transparent rounded-md shadow-sm font-medium'>
        <svg
          className='w-7 h-7'
          fill={data?.isLiked ? 'red' : 'none'}
          stroke='red'
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
  );
};

export default TweetDetail;
