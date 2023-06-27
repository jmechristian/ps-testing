import React, { useState, useEffect, useRef } from 'react';
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

  const dataFetchedRef = useRef(false);

  const getCurentUser = async () => {
    let { data: testers, error } = await supabase
      .from('testers')
      .select('*')
      .eq('email', user.user_metadata.email);

    if (testers.length > 0) {
      dispatch(setCurrentUser(testers[0]));
    } else {
      const { data, error } = await supabase
        .from('testers')
        .insert([
          { email: user.user_metadata.email, name: user.user_metadata.name },
        ])
        .select();
      if (data) {
        dispatch(setCurrentUser(data[0]));
      } else if (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (user) {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      getCurentUser();
    }
  }, [user]);

  useEffect(() => {
    const testers = supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'testers' },
        (payload) => {
          dispatch(setCurrentUser(payload.new));
        }
      )
      .subscribe();
  });

  return <div>{children}</div>;
};

export default Layout;
