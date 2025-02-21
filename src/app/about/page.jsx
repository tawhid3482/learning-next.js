"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {

  const router = useRouter()
  const isLogin = false
  const handleNavigation = ()=>{
    if(isLogin){
      router.push('/about/address')
    }else{
      router.push('/')
    }
  }
  return (
    <div>
      <p className='text-xl font-bold text-purple-400'>about</p>
      {/* <Link href={'/about/address'}>Address</Link> */}
      <button type='button' onClick={handleNavigation}>Address page</button>
    </div>
  );
};

export default Page;