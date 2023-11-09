import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import { Tweet, User } from '@prisma/client';

interface TweetWithCount extends Tweet {
  user: User;
  _count: {
    likes: number;
  };
}

interface TweetsResponse {
  status: string;
  tweets: TweetWithCount[];
}

export default () => {
  const router = useRouter();
  const { data, error } = useSWR<TweetsResponse>('/api/tweet');
  console.log(data);
  useEffect(() => {
    if (error) {
      router.replace('/create-account');
    }
  }, [router, error]);
  if (!data) {
    return <div />;
  }
  return (
    <div>
      {data?.tweets?.map((tweet) => (
        <Link href={`/tweet/${tweet.id}`} legacyBehavior>
          <a className='flex flex-col px-4 pt-5 cursor-pointer justify-between'>
            <div className='flex space-x-4'>
              <div className='pt-2 flex flex-col'>
                <h3 className='text-sm font-bold text-gray-900'>
                  {tweet.user.name}
                  <span className='font-medium ml-4'>
                    {tweet.createdAt.toString().substring(0, 10)}
                  </span>
                </h3>
                <span className='font-medium mt-1 text-gray-900'>
                  {tweet.message}
                </span>
              </div>
            </div>
            <div className='flex space-x-2 items-end justify-end'>
              <div className='flex space-x-0.5 items-center text-sm  text-gray-600'>
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path>
                </svg>
                <span>{tweet._count.likes}</span>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};
