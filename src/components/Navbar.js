import {React,useContext} from "react";
import { AppBar,Toolbar ,Box,Button} from "@mui/material";
import VideosContext from "../context/VideosContext";
import { useNavigate } from "react-router";
const Navbar=()=>{
    const {videosData}= useContext(VideosContext)
    const pages= [...new Set(videosData.map((video)=>video.category))]
    const navigate =useNavigate()
    const handleClick=(category)=>{
        navigate(`/${category}`)
    }
    return <AppBar>
        <Toolbar position="static">
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'},justifyContent:'end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, mx:4, px:5 , color: 'white', display: 'block' }}
                onClick={()=>handleClick(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
    </AppBar>
}

export default Navbar