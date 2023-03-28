import React, { useContext } from 'react'
import { useParams } from 'react-router'
import VideosContext from '../context/VideosContext'
import MediaCard from './MediaCard'
import { Grid } from '@mui/material'
export const Videos = () => {
  const {category}=useParams()
  const {videosData}=useContext(VideosContext)
  const categoryData= videosData.filter((video)=>video.category===category)
  return (
    
    <div className='videos-display'>
      <h1>{category.toUpperCase()} VIDEOS</h1>
      <Grid container spacing={4}>
      {
        categoryData.map((video)=>
        <Grid key={video.id} item sm={6} md={4}>
          <MediaCard key={video.id} video={video}/>
        </Grid>
       )
      }
      </Grid>
     
    </div>
  )
}
