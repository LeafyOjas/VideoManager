import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import VideosContext from '../context/VideosContext'
import { url } from '../util'
import { Outlet } from 'react-router';
import FloatingCreateButton from './FloatingCreateButton';
export const Home = () => {
    const [videosData, setvideosData] = useState([])
    useEffect(() => {
        if (videosData.length === 0) {
            fetch(url).then((resp) => resp.json()).then((res) => setvideosData(res))
        }
    }, [])
    return (
        <VideosContext.Provider value={{ videosData, setvideosData }}>
            <div className="App">
                <Navbar/>
            </div>
            <div className='mt-70' >
                <Outlet/>
                <FloatingCreateButton/>
            </div>
                
        </VideosContext.Provider>
    )
}
