import React from 'react'
import { CardHeader, IconButton,Avatar, cardActionAreaClasses, Card } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const UserChatCard = () => {
  return (
    <Card>
       <div>
      <CardHeader avatar={<Avatar sx={{width:"3.5rem",height:"3.5rem", 
      fontSize:"1.5rem", bgcolor:"#191c29",color:"rgb(88,199,250"}}
       src="https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png"/>

      }action={<IconButton>
        <MoreHorizIcon/>
      </IconButton>}
      title="Arbi Chaliha"
      subheader={"ArbiChaliha1"}
      >

      </CardHeader>
    </div>
    </Card>
   
  )
}

export default UserChatCard
