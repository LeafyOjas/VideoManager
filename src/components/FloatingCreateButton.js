import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CreateVideo from './CreateVideo';
import DeleteManyContext from '../context/DeleteManyContext'
import VideosContext from '../context/VideosContext';
import { Button } from '@mui/material';
import { deleteVideo } from '../util';
export default function FloatingCreateButton() {

    const [open, setOpen] = React.useState(false);
    const {setvideosData,videosData}=React.useContext(VideosContext)
    const {setDeleteMany,deleteMany,deleteManyID,setDeleteManyID}=React.useContext(DeleteManyContext)
    const handleSelectedDelete=()=>{
        try{
            deleteManyID.map(async (videoId)=>
            {
                await deleteVideo(videoId)
            }
                )
            const newData=videosData.filter((video)=>{
                return !deleteManyID.includes(video.id )
            })
            console.log(newData);
            setvideosData(newData)
            setDeleteManyID([])
            setDeleteMany(false)
        }
        catch(err){
            console.log(err);
        }
       
    }
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } ,position:'fixed',bottom:'10%',right:'4%',flexDirection:"column",display:"flex"}}>
        {!deleteMany?<>
            <Fab onClick={()=>setOpen(true)} style={{height:'80px',width:'80px'}} color="primary" aria-label="add">
            <AddIcon style={{fontSize:'40px'}} />
          </Fab>
          <Fab onClick={()=>setDeleteMany((prev)=>!prev)} style={{height:'80px',width:'80px'}} color="error" aria-label="add">
            <RemoveIcon style={{fontSize:'40px'}} />
          </Fab>
          <CreateVideo open={open} setOpen={setOpen} />
          </>:
          <Button onClick={handleSelectedDelete} variant="contained"> Delete Selected</Button>
        }
      
    </Box>
  );
}