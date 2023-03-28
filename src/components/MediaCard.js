import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {deleteVideo} from '../util'
import VideosContext from '../context/VideosContext'

export default function MediaCard({video}) {
  const {setvideosData,videosData}=React.useContext(VideosContext)
  const handleDelete=(id)=>{
      try{
        deleteVideo(id)
        const newVideos=videosData.filter((video)=>video.id!==id)
        setvideosData([...newVideos])
      }
      catch(e){
        console.log(e.message);
      }
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        component="iframe"
        src="https://www.youtube.com/embed/sZbWLGQD0Wg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {video.name.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small" onClick={()=>handleDelete(video.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}