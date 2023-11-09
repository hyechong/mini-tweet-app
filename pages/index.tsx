import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useSWR from 'swr';

export default () => {
  const router = useRouter();
  const { data, error } = useSWR('/api/users/tweet');
  console.log(data);
  // useEffect(() => {
  //   if (error) {
  //     router.replace('/create-account');
  //   }
  // }, [router, error]);
  // if (!data) {
  //   return <div />;
  // }
  return (
    <div>
      <h1>{data?.name}님, 환영합니다!</h1>
      <div></div>
    </div>
  );
};
