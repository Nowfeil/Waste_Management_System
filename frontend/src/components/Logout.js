import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout({ setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(false);
    navigate('/login');
  }, [navigate, setIsLoggedIn]);

  return null;
}
