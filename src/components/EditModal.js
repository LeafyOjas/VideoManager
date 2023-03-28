import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { UpdateVideo } from '../util';
import VideosContext from '../context/VideosContext';
export default function EditModal({open,setOpen,videoToEdit}) {

    const [videoDetails,setVideoDetails]=React.useState({...videoToEdit})
    const {setvideosData,videosData}=React.useContext(VideosContext)
    const handleUpdate=async ()=>{
        try{
            await UpdateVideo(videoDetails)
            const newData=videosData.map((video)=>{
                if (video.id===videoDetails.id){
                    return {...videoDetails}
                }
                return video
            })

            setvideosData([...newData])
            handleClose()
        }
        catch(err){
            console.log(err);
        }

    }

    const handleClose = () => {
        setOpen(false);
    };
   
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit the video
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={videoDetails.name}
                        onChange={(e)=>setVideoDetails({...videoDetails,name:e.target.value})
                        }
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="link"
                        label="Link"
                        type="url"
                        fullWidth
                        variant="standard"
                        value={videoDetails.link}
                        onChange={(e)=>setVideoDetails({...videoDetails,link:e.target.value})}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}