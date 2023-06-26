import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';
import { data } from '../test';

const Test = ({ isIndex }) => {
  const [pass, setPass] = useState(undefined);

  return (
    <div className='px-4 sm:px-6 lg:px-8 w-full max-w-5xl'>
      <div className='w-full h-full flex flex-col justify-between'>
        <div className='flex flex-col gap-6 pb-12'>
          <div className='font-bold uppercase tracking-[5px] text-base-brand text-lg'>
            Test {isIndex + 1}
          </div>
          <div className='font-medium text-white text-4xl'>
            {data[isIndex].prompt}
          </div>
        </div>
        <div className='border border-t-slate-500' />
        <div className='flex flex-col gap-9 pt-12'>
          <div className='font-bold uppercase tracking-[5px] text-base-brand text-lg'>
            Results
          </div>
          <div className='flex gap-6'>
            <div
              className='flex flex-col items-center gap-3'
              onClick={() => setPass(true)}
            >
              <div>
                <CheckCircleIcon
                  className={`w-16 h-16 ${
                    pass ? 'fill-green-600' : 'fill-gray-700'
                  }`}
                />
              </div>
              <div
                className={`font-bold text-lg ${
                  pass ? 'text-green-600' : 'text-gray-700'
                }`}
              >
                PASS
              </div>
            </div>
            <div
              className='flex flex-col items-center gap-3'
              onClick={() => setPass(false)}
            >
              <div>
                <XCircleIcon
                  className={`w-16 h-16 ${
                    !pass && pass != undefined
                      ? 'fill-red-600'
                      : 'fill-gray-700'
                  }`}
                />
              </div>
              <div
                className={`font-bold text-lg ${
                  !pass && pass != undefined ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                FAIL
              </div>
            </div>
          </div>
          <div className='w-full max-w-5xl'>
            <form className='flex flex-col gap-3'>
              <textarea
                className='w-full bg-gray-500 p-2 md:p-3 text-gray-200 rounded-md placeholder:text-gray-300'
                placeholder='Feedback?'
                rows='6'
              />
              <button className='bg-base-brand cursor-pointer text-white font-bold w-full py-4 rounded-lg flex items-center justify-center gap-3'>
                <div>Submit and Continue</div>
                <div>
                  <ArrowRightIcon className='w-5 h-5 text-white' />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
