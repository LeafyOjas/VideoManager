import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addVideo } from '../util';
import VideosContext from '../context/VideosContext';
export default function CreateVideo({ open, setOpen }) {

    const [videoDetails,setVideoDetails]=React.useState({name:"",category:"",link:""})
    const {setvideosData}=React.useContext(VideosContext)
    const handleCreate=async ()=>{
        
        const response=await addVideo(videoDetails)
        setvideosData((prev)=>{
            return [ ...prev,response]
       
    })
        console.log(response);
        handleClose()

    }

    const handleClose = () => {
        setOpen(false);
    };
   
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create a new video style by filling up the following details
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
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
                        onChange={(e)=>setVideoDetails({...videoDetails,link:e.target.value})}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="category"
                        label="Category"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e)=>setVideoDetails({...videoDetails,category:e.target.value})}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCreate}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}