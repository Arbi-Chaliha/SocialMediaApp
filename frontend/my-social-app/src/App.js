import './App.css';
import { Route,Routes } from 'react-router-dom';
import Authentication from './pages/Authenticate/Authentication';
import Login from './pages/Authenticate/Login';
import Register from './pages/Authenticate/Register';
import Message from './pages/Message/Message';
import HomePage from './pages/HomePage/HomePage';
import './index.css'; // Ensure this import exists and is correct


function App() {
  return (
   <div>

    <Routes>
     
      <Route path='/*'element={<HomePage/>}/>
      <Route path='/message'element={<Message/>}/>
      <Route path='/*'element={<Authentication/>}/>
     

    
    </Routes>
  
   
   </div>
   
  );
}

export default App;
