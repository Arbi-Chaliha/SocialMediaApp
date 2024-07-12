import { Avatar, Button } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'


const Profile = () => {
  const {id}=useParams();
  return (
    <div className='py-10 w-[70%]'>
      <div className='rounded-md'>
        <div className='h-[15rem]'>
          <img className='w-full h-full rounded-t-md'
          src="https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_1280.jpg" alt="" />
        </div>
        <div className='px-5 flex justify-between items-start mt-5 h-["5rem"]'>
          <Avatar className='transform -translate-y-24' sx={{width:"10rem",height:"10rem"}}
          src="https://cdn.pixabay.com/photo/2023/03/15/09/32/woman-7854120_1280.png"/>
          {true?<Button sx={{borderRadius:"20px"}}variant='outlined'>Edit Profile</Button>:
          <Button variant='outlined'>Follow</Button>}
        </div>
      </div>
    </div>
  )
}

export default Profile
