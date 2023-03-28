import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CreateVideo from './CreateVideo';
export default function FloatingCreateButton() {
    const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } ,position:'fixed',bottom:'10%',right:'4%',flexDirection:"column",display:"flex"}}>
      <Fab onClick={()=>setOpen(true)} style={{height:'80px',width:'80px'}} color="primary" aria-label="add">
        <AddIcon style={{fontSize:'40px'}} />
      </Fab>
      <Fab style={{height:'80px',width:'80px'}} color="error" aria-label="add">
        <RemoveIcon style={{fontSize:'40px'}} />
      </Fab>
      <CreateVideo open={open} setOpen={setOpen} />
    </Box>
  );
}