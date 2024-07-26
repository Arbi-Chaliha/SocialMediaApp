import { Avatar, Card,CardHeader } from '@mui/material';
import React from 'react'


const SearchUser = () => {
  const handleSearchUser=()=>
  {
    console.log("search user...");
  }
  const handleClick=(id)=>
  {
    console.log(id);
  }
  return (
    <div>
     <div>
      <input className='bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full'
      placeholder='search user....'onChange={handleSearchUser}
      type="text" />
     </div>
     {
       false && <Card>
        <CardHeader onClick={()=>
        {
          handleClick();
        }

        }
        avatar={<Avatar src="https://cdn.pixabay.com/photo/2024/07/12/08/05/venice-8889871_1280.jpg"/>

        }
        title='AnathonyPics'
        subheader={'AnathonyPics'}
        
        />

       
       </Card>
     }


    </div>
  )
}

export default SearchUser
