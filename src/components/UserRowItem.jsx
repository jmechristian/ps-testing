import React, { useState } from 'react';
import {
  CheckCircleIcon,
  XCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid';

const UserRowItem = ({ test }) => {
  const getShit = () => {
    switch (test.pass) {
      case true:
        return <CheckCircleIcon className='w-9 h-9 fill-green-600' />;
      case false:
        return <XCircleIcon className='w-9 h-9 fill-red-600' />;
      case 'undefined':
        return <QuestionMarkCircleIcon className='w-9 h-9 fill-dark-dark' />;
      default:
        return <QuestionMarkCircleIcon className='w-9 h-9 fill-dark-dark' />;
    }
  };

  return (
    <div className='relative'>
      {/* <div className='fixed z-20 w-72 bottom-[50%] max-w-prose p-9 rounded'>
        {test.feedback && test.feedback}
      </div> */}
      {test && getShit()}
    </div>
  );
};

export default UserRowItem;
