import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    console.log(posterPath,'hello')
  return (
    <div className='w-48 pr-4'>
        <img alt='Movie Card' 
            src={IMG_CDN_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard