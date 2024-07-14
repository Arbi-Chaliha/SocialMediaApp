import './App.css';
import { Route,Routes } from 'react-router-dom';
import Authentication from './pages/Authenticate/Authentication';
import Login from './pages/Authenticate/Login';
import Register from './pages/Authenticate/Register';
import Message from './pages/Message/Message';
import HomePage from './pages/HomePage/HomePage';
import './index.css'; // Ensure this import exists and is correct
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from './redux/Auth/auth.action';
import { useEffect } from 'react';
import { authReducer } from './redux/Auth/auth.reducer';
import { store } from './redux/store';


function App() {
  const {auth}=useSelector((store)=>store);
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  useEffect(()=>{
    dispatch(getProfileAction(jwt))
  },[]

  )
  return (
   <div>

    <Routes>
    
    < Route path='/*'element={auth.use?<HomePage/>:<Authentication/>}/>
    
      <Route path='/message'element={<Message/>}/>
      
     
     
     

    
    </Routes>
  
   
   </div>
   
  );
}

export default App;






