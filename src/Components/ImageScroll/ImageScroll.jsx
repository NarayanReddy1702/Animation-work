import React from 'react'

const ImageScroll = ({visible}) => {
  return (
    <div className={`w-full h-screen  ${visible?"block":"hidden"}  bg-red-300 text-white`}>ImageScroll</div>
  )
}

export default ImageScroll