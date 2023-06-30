import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';
import UserRowItem from './UserRowItem';

const UserRow = ({ user }) => {
  return (
    <div className='flex gap-3 pt-4'>
      <div className='text-lg font-semibold leading-tight w-20'>
        {user.name}
      </div>
      <div className='grid grid-cols-11 w-full items-start'>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <div className='uppercase text-xs md:text-sm text-gray-500'>
            Test 1
          </div>
          <UserRowItem test={user.test1} />
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <div className='uppercase text-xs md:text-sm text-gray-500'>
            Test 2
          </div>
          <UserRowItem test={user.test2} />
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <div className='uppercase text-xs md:text-sm text-gray-500'>
            Test 3
          </div>
          <UserRowItem test={user.test3} />
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <div className='uppercase text-xs md:text-sm text-gray-500'>
            Test 4
          </div>
          <UserRowItem test={user.test4} />
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <div className='uppercase text-xs md:text-sm text-gray-500'>
            Test 5
          </div>
          <UserRowItem test={user.test5} />
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <div className='uppercase text-xs md:text-sm text-gray-500'>
            Test 6
          </div>
          <UserRowItem test={user.test6} />
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <div className='uppercase text-xs md:text-sm text-gray-500'>
            Test 7
          </div>
          <UserRowItem test={user.test7} />
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <div className='uppercase text-xs md:text-sm text-gray-500'>
            Test 8
          </div>
          <UserRowItem test={user.test8} />
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <div className='uppercase text-xs md:text-sm text-gray-500'>
            Test 9
          </div>
          <UserRowItem test={user.test9} />
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <div className='uppercase text-xs md:text-sm text-gray-500'>
            Test 10
          </div>
          <UserRowItem test={user.test10} />
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <div className='uppercase text-xs md:text-sm text-gray-500'>
            Test 11
          </div>
          <UserRowItem test={user.test11} />
        </div>
        {/* <div className='flex flex-col gap-3 justify-center items-center'>
          <div>Test 12</div>
          <UserRowItem test={user.test12} />
        </div> */}
      </div>
    </div>
  );
};

export default UserRow;
