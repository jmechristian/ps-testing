import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { setCurrentUser } from '../authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { data } from 'autoprefixer';

const Layout = ({ children }) => {
  const supabase = createClient(
    'https://iurvwisrpanriwttmzhs.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1cnZ3aXNycGFucml3dHRtemhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc2NjAzMjksImV4cCI6MjAwMzIzNjMyOX0.gYXFMwEUiceHICPB5cgbTnU7kbyEJ8sLgCqroyvtSac'
  );
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const getCurentUser = async () => {
    let { data: testers, error } = await supabase
      .from('testers')
      .select('*')
      .eq('email', user.user_metadata.email);

    if (testers.length > 0) {
      console.log('testers', testers);
      dispatch(setCurrentUser(testers[0]));
    } else {
      const { data, error } = await supabase
        .from('testers')
        .insert([
          { email: user.user_metadata.email, name: user.user_metadata.name },
        ])
        .select();
      if (data) {
        dispatch(setCurrentUser(data));
      } else if (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    user && getCurentUser();
  }, [user]);

  return <div>{children}</div>;
};

export default Layout;
