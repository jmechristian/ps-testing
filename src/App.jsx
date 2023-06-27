import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import { useNavigate } from 'react-router-dom';

function App() {
  const { session } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/dashboard');
    }
  });

  return (
    <>
      <Login />
    </>
  );
}

export default App;
