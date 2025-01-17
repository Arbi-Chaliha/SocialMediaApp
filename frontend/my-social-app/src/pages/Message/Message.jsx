import React from 'react'
import { Avatar, Grid, IconButton } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'; 
import SearchUser from '../../components/SearchUser/SearchUser';
import UserChatCard from './UserChatCard';
import ChatMessage from './ChatMessage';
import { useDispatch,useSelector } from 'react-redux';
import {getAllChats} from '../../redux/Message/message.action'
const Message = () => {
  const dispatch=useDispatch();
  const {message,auth}=useSelector(store=>store);

  useEffect(()=>{
    dispatch(getAllChats());
  },[])
  console.log("chats...",message.chats)
  const handleSelectImage=()=>
  {
    console.log('handle select image')
  }
  return (
    <div>
      <Grid container className="h-screen overflow-y-hidden">
        <Grid className="px-5"item xs={3}>
          <div className='flex h-full justify-between space-x-2'>
           <div className='w-full'>
           <div className='flex space-x-4 items-center py-5'>
              <WestIcon/>
              <h1 className='text-xl font-bold'>
                 Home
              </h1>
            </div>
            <div className='h-[83vh]'>
              <div className=''>
              <SearchUser/>
              </div>
              <div className='h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar'>
                {
                  message.chats.map((item)=><UserChatCard chat={item}/>)
                }
         
              </div>
            </div>
           </div>
          </div>
        </Grid>
        <Grid className='h-full'item xs={9}>
        <div>
          <div className='flex justify-between items-center border-1 p-5'>
            <div className='flex items-center space-x-3'>
               <Avatar src="https://cdn.pixabay.com/photo/2019/10/23/08/03/woman-4570763_1280.jpg"/>
               <p>Anna Hatherson</p>
            </div>
            <div className='flex space-x-3'>
          <IconButton>
             <AddIcCallIcon/>
          </IconButton>
          <IconButton>
             <VideoCallIcon/>
          </IconButton>

            </div>
          </div>
          <div className='hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5'>
            <ChatMessage/>
          </div>
        </div>
        <div className='sticky bottom-0 border-1'>
            <div className='py-5 flex items-center justify-center space-x-5'>
              <input className='bg-transparent border border-[#3b40544] rounded-full w-[90%] py-3 px-5'
              placeholder='Type message...'
               type="text" />
               <div>
                 <input type="file" accept="image/*" onChange={handleSelectImage}className='hidden'id='image-input'/>
                 <label htmlFor="image-input">
                  <AddPhotoAlternateIcon/>
                 </label>
               </div>
            </div>
        </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Message
