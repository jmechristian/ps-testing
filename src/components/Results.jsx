import React, { Suspense } from 'react';
import FullUserRow from './FullUserRow';

const Results = () => {
  return (
    <div className='bg-dark-mid h-full flex flex-1 min-h-screen text-white'>
      <div className='w-full max-w-5xl px-6 lg:px-0 mx-auto py-24'>
        <div className='flex flex-col gap-12'>
          <div className='text-2xl font-semibold'>
            Testing Results: Round 1 6/28/2023
          </div>
          <FullUserRow />
        </div>
      </div>
    </div>
  );
};

export default Results;
