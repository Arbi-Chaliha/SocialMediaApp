import { Avatar, Card,CardHeader } from '@mui/material';
import React, { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { searchUser } from '../../redux/Auth/auth.action';
import { createChat } from '../../redux/Message/message.action';




const SearchUser = () => {
  const [username,setUsername]=useState("");
  const dispatch=useDispatch();
  const {message,auth}=useSelector(store=>store);



  const handleSearchUser=(e)=>
  {
    setUsername(e.target.value);
    console.log("search user...",auth.searchUser);
    dispatch(searchUser(username));
  };
  const handleClick=(id)=>
  {
   dispatch(createChat({userId:id}));
  };
  return (
    <div>
     <div className='py-5 relative'>
      <input className='bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full'
      placeholder='search user....'onChange={handleSearchUser}
      type="text" />
       {
       username && (
        auth.searchUser.map((item)=><Card className='absolute w-full  z-10 top-[4.5rem] cursor-pointer'>
          <CardHeader onClick={()=>
          {
            handleClick(item.id);
            setUsername("")
          }
  
          }
          avatar={<Avatar src="https://cdn.pixabay.com/photo/2024/07/12/08/05/venice-8889871_1280.jpg"/>
  
          }
          title={item.firstName+" "+item.lastName}
          subheader={item.firstName.toLowerCase()+" "+item.lastName.toLowerCase()}
          
          />
  
         
         </Card>)
     )}
     </div>
    


    </div>
  );
};

export default SearchUser
