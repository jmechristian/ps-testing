import { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useDispatch } from 'react-redux';
import { setUser, setSession } from '../authSlice';

const supabase = createClient(
  'https://iurvwisrpanriwttmzhs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1cnZ3aXNycGFucml3dHRtemhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc2NjAzMjksImV4cCI6MjAwMzIzNjMyOX0.gYXFMwEUiceHICPB5cgbTnU7kbyEJ8sLgCqroyvtSac'
);

export default function Login() {
  const dispatch = useDispatch();

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (data) {
      dispatch(setUser(data));
    } else {
      console.log(error);
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setSession(session));
      dispatch(setUser(session.user));
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setSession(session));
      dispatch(setUser(session.user));
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);

  return (
    <>
      <div className='flex h-screen flex-1 bg-dark-mid'>
        <div className='flex flex-1 flex-col justify-center lg:flex-none '>
          <div className='mx-auto h-full flex flex-1 flex-col justify-between max-w-md lg:w-[96]'>
            <div className='flex flex-col h-full justify-between py-6 lg:py-9  px-6 md:px-10'>
              <img
                className='h-20 w-20'
                src='https://packschool.s3.amazonaws.com/PS_com+LOGO+1.png'
                alt='Your Company'
              />
              <div className='flex flex-col text-lg gap-3'>
                <div className='uppercase tracking-[9px] font-extrabold text-base-brand'>
                  Sign In To
                </div>
                <div className='font-semibold text-8xl text-white'>
                  Begin Testing
                </div>
                <div
                  className='w-fit mt-4 bg-base-brand text-white text-sm font-bold text-center rounded-lg px-6 py-3'
                  onClick={signInWithGoogle}
                >
                  {/* <ArrowRightIcon className='w-20 h-20 text-white' /> */}
                  Sign In with Google
                </div>
              </div>
              <div className='text-xs text-white/30'>
                Copyright © 2022 The Packaging School, LLC. <br />
                All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src='https://packschool.s3.amazonaws.com/testinghome.webp'
            alt=''
          />
        </div>
      </div>
    </>
  );
}
