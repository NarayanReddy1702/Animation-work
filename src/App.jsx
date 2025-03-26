import React, { useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Home from './Components/Home/Home';
import ImageScroll from './Components/ImageScroll/ImageScroll';
import BoxAnime from './Components/BoxAnime/BoxAnime';


const App = () => {
  const [visible,setVisible]=useState(false)
const locomotiveScroll = new LocomotiveScroll();

  return (
   <div className='w-full min-h-screen bg-black text-white'>
      <Home  update={setVisible}/>
      <ImageScroll visible={visible}/>
      <BoxAnime visible={visible}/>
   </div>
  )
}

export default App