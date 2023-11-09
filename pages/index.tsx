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
    <div className='flex h-auto w-full items-center justify-center p-12'>
      <div className='bg-pink-100 p-4 w-full max-w-sm rounded-3xl border-2 border-b-4 border-r-4 border-black'>
        <h1 className='text-xl font-extrabold flex justify-center items-center'>
          Tweets
        </h1>
        <ul>
          {data?.tweets?.map((tweet) => (
            <li className='border-b border-black last:border-b-0 pb-5'>
              <Link href={`/tweet/${tweet.id}`} legacyBehavior>
                <a className='flex flex-col px-4 pt-5 cursor-pointer justify-between'>
                  <div className='flex justify-between space-x-5'>
                    <div className='pt-2 flex flex-col'>
                      <h4 className='text-sm font-bold text-gray-800 '>
                        {tweet.user.name}
                        <span className='text-xs text-neutral-500 font-normal ml-3'>
                          {tweet.createdAt.toString().substring(0, 10)}
                        </span>
                      </h4>
                      <span className='font-medium mt-1 text-gray-900'>
                        {tweet.message}
                      </span>
                    </div>
                    <div className='flex'></div>
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
            </li>
          ))}
        </ul>
        <Link href='/tweet/upload' legacyBehavior>
          <a className='bg-yellow-400 px-5 py-2 flex justify-center items-center w-full rounded-lg border-2 border-b-4 border-r-4 border-black font-bold'>
            add
          </a>
        </Link>
      </div>
    </div>
  );
};
