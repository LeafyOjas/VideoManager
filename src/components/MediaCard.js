import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {deleteVideo} from '../util'
import VideosContext from '../context/VideosContext'
import DeleteManyContext from '../context/DeleteManyContext';
import Checkbox from '@mui/material/Checkbox';
import { useLocation } from 'react-router';
import EditModal from './EditModal';
export default function MediaCard({video}) {
  const {setvideosData,videosData}=React.useContext(VideosContext)
  const [open,setOpen]=React.useState(false)
  const {deleteMany,setDeleteManyID,deleteManyID}=React.useContext(DeleteManyContext)
  const location=useLocation()
  const handleCheck=(isChecked)=>{

    if(isChecked) setDeleteManyID(prev=>[...prev,video.id])
    else {
      setDeleteManyID([...deleteManyID.filter((id)=>id!==video.id)])
    }
  }
  const handleDelete=(id)=>{
      try{
        deleteVideo(id)
        const newVideos=videosData.filter((video)=>video.id!==id)
        setvideosData([...newVideos])
        alert('Deleted Successfully')
      }
      catch(e){
        console.log(e.message);
      }
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      {deleteMany && location.pathname.includes(video.category)?<Checkbox onChange={handleCheck} color="error"/>:null}
      <CardMedia
        sx={{ height: 140 }}
        component="iframe"
        src={video.link}
        title={video.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {video.name.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>setOpen(true)}>Edit</Button>
        <Button size="small" onClick={()=>handleDelete(video.id)}>Delete</Button>
      </CardActions>
      <EditModal open={open} setOpen={setOpen} videoToEdit={video}/>
    </Card>
  );
}