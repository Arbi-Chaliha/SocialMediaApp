import { Card } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { CardContent, Typography, CardActions,IconButton} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const PostCard = () => {
  
  return (
    <Card>
      <CardHeader
        
        avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://cdn.pixabay.com/photo/2024/02/27/14/00/chrysanthemum-8600210_1280.jpg"
          alt="Paella dish"


      />
       <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between'disableSpacing>
          <div>
            <IconButton>
            {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>

            <IconButton>
            {<ShareIcon/>}
            </IconButton>

            <IconButton>
            {<ChatBubbleIcon/>}
            </IconButton>


          </div>
          <div>
            <IconButton>{true?<BookmarkIcon/>:<BookmarkBorderIcon/>}</IconButton>
          
          </div>
      </CardActions>
    </Card>
  )
}

export default PostCard

