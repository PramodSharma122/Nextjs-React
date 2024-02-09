import React from 'react'
import Image from "next/image"; 

export default function HeroSection() {
  return (
    <section id="home" className='min-h-screen h-full w-full grid items-center grid-cols-2 px-[10%] gap-[4em] bg-[#081b29]'>
        <div className="max-w-screen-sm">
            <h1 className='font-extrabold text-5xl text-[#ffffff] mb-[10px]'>Hi! I'm Pramod</h1>
            <div className="text-2xl font-semibold">
                <h3 className='inline-flex m-0 align-top text-[#ffffff]'>And I'm</h3>
                <h3 className='inline-flex m-0 align-top'>
                    <span className="absolute flex opacity-0">Web&nbsp;Designer</span>
                    <span className="absolute flex opacity-0">Student</span>
                    <span className="absolute flex opacity-0">Game&nbsp;Developer</span>
                    <span className="absolute flex opacity-0">Graphics&nbsp;Designer</span>
                </h3>
                <p className='leading-relaxed text-[#bdbdbd]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, mollitia.</p>
                <div className="inline-flex justify-between items-center mt-4 mx-0 mb-8 w-80">
                    <h5 className='font-semibold text-[#f5f5f5] text-base'>Email :</h5>
                    <span className='text-sm text-[#bdbdbd]'> pramodchalise122@gmail.com</span>
                </div>
            </div>

            <div className="inline-flex justify-between w-80 h-11">
                <a href="#" className="inline-flex justify-center items-center w-36 h-[100%] text-[#081b29] bg-[#12f7ff] text-base tracking-widest font-semibold rounded-md relative overflow-hidden z-1 border border-[#12f7ff] hover:text-[#12f7ff] hover:bg-[#081b29] hover:border-[#12f7ff]">Download CV</a>
                <a href="#" className="inline-flex justify-center items-center w-36 h-[100%] text-[#081b29] bg-[#12f7ff] text-base tracking-widest font-semibold rounded-md relative overflow-hidden z-1 border-[#12f7ff] hover:text-[#12f7ff] before:content-[''] before:absolute before:top-[0] before:left-[0] before:bg-[#081b29] before:w-[0] before:h-[100%] before:-z-1 before:transition-[.4s] hover:before:w-[100%]">Hire Me Now!</a>
            </div>

            <div class="social-icons">
                <a href=""><i class="bx bxl-facebook"></i></a>
                <a href=""><i class="bx bxl-instagram"></i></a>
                <a href=""><i class="bx bxl-github"></i></a>
                <a href=""><i class="bx bxl-whatsapp"></i></a>
            </div>
        </div>

        <div className="relative mt-5">
            <div className="text-center">
                <img className='rounded-[30px] max-w-md w-[100%] h-[auto]' src="/received_521628159513594.jpeg"></img>
            </div>
        </div>
    </section>
  )
}
