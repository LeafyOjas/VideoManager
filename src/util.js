export const url='http://localhost:3000/videos'

export const addVideo=async (videoDetails)=>{
    const options={
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(videoDetails)
    }
    const data=fetch(url,options).then((res)=>res.json()).then((data)=>{
    console.log("success",data)
    return data
})

    return data
}

export const deleteVideo= async (videoID)=>{
    const options={
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
          },
    }
    const data=fetch(url+`/${videoID}`,options).then((res)=>res.json()).then((data)=>{
    console.log("delete success",data)
    return data
})

    return data
}

