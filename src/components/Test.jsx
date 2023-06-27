import { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';
import { createClient } from '@supabase/supabase-js';
import { data } from '../test';
import { useSelector } from 'react-redux';

const supabase = createClient(
  'https://iurvwisrpanriwttmzhs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1cnZ3aXNycGFucml3dHRtemhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc2NjAzMjksImV4cCI6MjAwMzIzNjMyOX0.gYXFMwEUiceHICPB5cgbTnU7kbyEJ8sLgCqroyvtSac'
);

const Test = ({ isIndex, set }) => {
  const [pass, setPass] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const { currentUser } = useSelector((state) => state.auth);

  const testTitle = `test${isIndex + 1}`;

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { data, error } = await supabase
      .from('testers')
      .update({
        [testTitle]: {
          pass: pass,
          feedback: feedback,
        },
      })
      .eq('id', currentUser.id)
      .select();

    if (data) {
      setIsLoading(false);
      set(isIndex + 1);
    } else if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    currentUser && currentUser[testTitle] && currentUser[testTitle].feedback
      ? setFeedback(currentUser[testTitle].feedback)
      : setFeedback('');

    setPass(
      currentUser && currentUser[testTitle].pass
        ? currentUser[testTitle].pass === true
        : undefined
    );
  }, [currentUser, testTitle]);

  return (
    <div className='px-4 sm:px-6 lg:px-8 w-full max-w-5xl'>
      <div className='w-full h-full flex flex-col justify-between'>
        <div className='flex flex-col gap-6 pb-12'>
          <div className='font-bold uppercase tracking-[5px] text-base-brand text-lg'>
            Test {isIndex + 1}
          </div>
          <div className='font-medium text-white text-4xl leading-snug'>
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
              className='flex flex-col items-center gap-3 cursor-pointer'
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
              className='flex flex-col items-center gap-3 cursor-pointer'
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
            <form className='flex flex-col gap-3' onSubmit={submitHandler}>
              <textarea
                className='w-full bg-gray-500 p-2 md:p-3 text-gray-200 rounded-md placeholder:text-gray-300'
                placeholder='Feedback?'
                rows='6'
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button className='bg-base-brand cursor-pointer text-white font-bold w-full py-4 rounded-lg flex items-center justify-center gap-3'>
                {isLoading ? (
                  <div>Meep...morp...boop...sending...</div>
                ) : (
                  <>
                    <div>Submit and Continue</div>
                    <div>
                      <ArrowRightIcon className='w-5 h-5 text-white' />
                    </div>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
