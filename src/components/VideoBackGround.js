import React from 'react'
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackGround = ({movieId}) => {

  
  const trailerVideo = useSelector((store)=>store.movies?.trailerVideo)
  useMovieTrailer(movieId)





  return (
    <div className='w-screen'>
      
      <iframe src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
      className='w-screen aspect-video'
      title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackGround