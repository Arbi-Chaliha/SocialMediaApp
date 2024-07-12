import React from 'react'
import { CardHeader,Avatar,IconButton, Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

const PopularUserCard = () => {
  return (
    <div>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
         <Button size='small'>
            Follow
         </Button>
        }
        title="Shrimp and Chorizo Paella"
        subheader="@Arbi"
      />
    </div>
  )
}

export default PopularUserCard
