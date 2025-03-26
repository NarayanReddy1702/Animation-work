import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Home = ({update}) => {
const [num, setNum] = useState(0)
const [progress, setProgress] = useState(num)

useGSAP(()=>{
    const tl = gsap.timeline()
    tl.to(".loader",{
        top:"-100%",
        duration:.5,
        delay:4.1,
       },"same")
       tl.to(".text",{
        color:"#fff",
       duration:1,
       delay:4.2,
      },"same")
       tl.to(".loader1",{
       opacity:0,
        duration:1,
        delay:1,
        onComplete:function () {
          update(true)
        }
       })
 })



useEffect(()=>{
  setInterval(() => {
    setNum(pre=>pre+1)
  }, 70);
},[])
  return (
    <div className='w-full relative h-screen bg-black-900 text-white'>
        <div className='loader  w-full h-full bg-yellow-300 absolute top-0 left-0 z-10 '>
            <div className='w-[95%] h-[0.7vh] bg-white rounded overflow-hidden absolute left-1/2 -translate-x-1/2 mt-5  '>
             <div style={{width:`${num}%`}} className={` h-full bg-linear-to-t from-zinc-500 to-yellow-700 transition-all duration-200`}></div>
            </div>
       <span className='text-black text-[16vh] p-10 flex items-end justify-end'>{Math.min(100, Math.max(num, 0))}%</span>
        </div>
        <div className='loader1  w-full h-full  absolute top-0 left-0 z-9 overflow-hidden'>
          <video autoPlay loop muted  src="./Videos/video.mp4"></video>
        </div>
        <nav className='max-w-[1200px] relative mx-auto bg-black h-[10vh]'>
          <h1>Logo</h1>
        <hr className='absolute bottom-0 left-0 w-full h-[0.5px] text-gray-500' />
        </nav>
         <div className=' text uppercase text-[16vh] font-semibold text-black tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
            Work
         </div>
    </div>
  )
}

export default Home