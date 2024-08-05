import './App.css';
import { Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authenticate/Authentication';
import Message from './pages/Message/Message';
import HomePage from './pages/HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from './redux/Auth/auth.action';
import { useEffect } from 'react';
import Profile from './pages/Profile/Profile';

function App() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(getProfileAction(jwt))
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/message' element={<Message />} />
        <Route path='/login' element={auth.user ? <HomePage /> : <Authentication />} />
        <Route path='/*' element={auth.user ? <HomePage /> : <Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
