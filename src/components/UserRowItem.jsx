import React, { useState } from 'react';
import {
  CheckCircleIcon,
  XCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid';

const UserRowItem = ({ test }) => {
  const [isOpen, setIsOpen] = useState(false);

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

  const feedbackOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative' onClick={feedbackOpenHandler}>
      {test && getShit()}
      {isOpen && (
        <div className='absolute z-20 w-[500px] rounded-lg shadow-sm max-w-3xl padding-6 bg-slate-100 left-1/2 -translate-x-1/2 flex flex-col'>
          <div className='text-slate-900 text-sm p-4'>{test.feedback}</div>
        </div>
      )}
    </div>
  );
};

export default UserRowItem;
