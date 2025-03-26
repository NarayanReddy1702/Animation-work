import React from 'react'

const BoxAnime = ({visible}) => {
  return (
    <div   className={`w-full h-screen ${visible?"block":"hidden"}  bg-green-300 text-white`}>BoxAnime</div>
  )
}

export default BoxAnime