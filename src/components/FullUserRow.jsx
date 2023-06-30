import React, { Suspense, useEffect, useState } from 'react';
import UserRow from './UserRow';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://iurvwisrpanriwttmzhs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1cnZ3aXNycGFucml3dHRtemhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc2NjAzMjksImV4cCI6MjAwMzIzNjMyOX0.gYXFMwEUiceHICPB5cgbTnU7kbyEJ8sLgCqroyvtSac'
);

const FullUserRow = () => {
  const [testers, setTesters] = useState(null);

  useEffect(() => {
    const getAllUsers = async () => {
      let { data: testers, error } = await supabase.from('testers').select('*');

      if (testers) {
        setTesters(testers);
      } else if (error) {
        console.log(error);
      }
    };

    getAllUsers();
  }, []);

  return (
    <Suspense fallback={<div>Meep/ Morp...</div>}>
      <div className='flex flex-col gap-12 divide-y divide-gray-500'>
        {testers &&
          testers.map((user) => (
            <div key={user.id}>
              <UserRow user={user} />
            </div>
          ))}
      </div>
    </Suspense>
  );
};

export default FullUserRow;
