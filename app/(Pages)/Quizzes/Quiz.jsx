import React from 'react'
import Image from 'next/image';
import { WebCard, WebItems, WebItems2 } from '@/app/Data/Data';
import { IoHeart } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import Link from 'next/link';
import { FaHtml5, FaJava, FaCss3Alt, FaReact, FaJs} from "react-icons/fa";
import er from '@/public/Imoji/dd3.png'
import { GrMysql } from "react-icons/gr";
import { SiPhp } from "react-icons/si";
import { FaPython } from "react-icons/fa6";


const webList = [
  {name: 'Java', icon:<FaJava className='text-[#567c9a]'  size={75}/>, url: '/Quizzes/Java', bg: 'bg-[#567c9a]'},
  {name: 'HTML', icon:<FaHtml5 className='text-[#dd4b25]'  size={70}/>, url: '/Quizzes/Java', bg: 'bg-[#dd4b25]'},
  {name: 'CSS', icon:<FaCss3Alt className='text-[#136db0]'  size={70}/>, url: '/Quizzes/Java', bg: 'bg-[#136db0]'},
  {name: 'JavaScript', icon:<FaJs className='text-[#f7d800]'  size={70}/>, url: '/Quizzes/Java', bg: 'bg-[#f7d800]'},
  {name: 'React', icon:<FaReact className='text-[#00d1f7]'  size={70}/>, url: '/Quizzes/Java', bg: 'bg-[#00d1f7]'},
  // {name: 'PHP', icon:<SiPhp className='text-[#4d588e]'  size={75}/>, url: '/Quizzes/Java', bg: 'bg-[#4d588e]'},
  // {name: 'Python', icon:<FaPython className='text-[#f7c940]'  size={70}/>, url: '/Quizzes/Java', bg: 'bg-[#f7c940]'},
  {name: 'MySQL', icon:<GrMysql className='text-[#005d88]'  size={70}/>, url: '/Quizzes/Java', bg: 'bg-[#005d88]'},
]




const list = ['Web Development', 'Graphic Design', 'Genie Civil', 'English Language']


const Quiz = () => {
  return (
    <div className="w-screen  h-full py-[70px] relative">
        <div className='max-w-[1650px] z-[20]  mx-auto pt-10 px-10 w-screen h-full '>
            <div className="w-full flex flex-col justify-center gap-4 items-center overflow-hidden">
              <div className="h-[100px] -rotate-12 opacity-40 blur-[60px] w-[500px] absolute top-[150px] left-0  rounded-[0px_50%_50%_0px] overflow-hidden bg-red-500 "></div>
              
              <div className="h-[100px] opacity-40 blur-[60px] w-[500px] absolute top-[220px] right-0 -rotate-12  rounded-[0px_50%_50%_0px] overflow-hidden bg-blue-500 "></div>
              
                <h1 className='text-[16px]  max-w-[750px] text-center font-apercu  font-bold text-[#362f3b]/90 relative'> Challenge Yourself: Master Your Skills with Our Quizzes!</h1>
                <p className='text-[50px] max-w-[800px] font-TitlingMed text-center text-[#2c2531]'>Learn, Compete, and Grow with Fun Quizzes!</p>
               
                <div className="w-full flex items-center gap-6 justify-center pt-10">
                    <p className='text-[12.5px] hover:text-[#ff472b] relative w-fit   cursor-pointer  font-apercu text-[#2c2531]/80'>Trending quizzes <span className='size-1 rounded-full absolute top-[2.5px] -right-[2px] bg-[#ff472b]'></span></p>
                    {
                      list.map((item,i) => <p key={i} className='text-[12.5px] text-[#2c2531]/80 hover:bg-[#f4f4f5] cursor-pointer border-[.5px] hover:border-[#58585e]/20 font-apercu bg-[#f3f3f6] rounded-full px-3 py-1'>{item}</p> )
                    }
                </div> 
            </div> 
            

            <div className="w-full pt-[100px]">
                <h5 className='mb-5 font-TitlingMed relative  text-black w-fit'>Web Development <span className='size-1 rounded-full absolute bottom-[5px] -right-[8px] bg-[#000]/50'></span></h5>
                <p className='text-[#222222] font-semibold max-w-[450px] leading-tight text-[30px] font-apercuBold '>Put your frontend development skills to the test!</p>
                <div className="w-full mt-20 gap-6 grid grid-cols-4">


                  {
                    webList.map((item,i) => {
                      const {name, icon, url, bg} = item
                      return(
                          <>
                                                    
                              <div key={i} className="h-[300px] pt-4 cursor-pointer boxs z-[1] overflow-hidden shadow-md border-[.5px] border-[#1c1c1c]/10  relative flex-col  rounded-sm flex items-center justify-center gap-4">
                                <span className={` arrows text-white/90 z-[6]  bg-black/10 shadow-md absolute top-3 right-3 border-[.5px]  opacity-100 size-[35px] backdrop-blur-[5px] blur-[10px]  duration-200 ease-in-out rounded-full flex justify-center items-center`}><BsArrowUpRight className='text-[17px]'/></span>

                                    <Image loading='lazy' className='w-full mix-blend-overlay absolute top-0 left-0 h-full z-[-1] object-cover' alt='' src={er} />
                                    {icon}
                                    <div className="flex  items-center gap-3 text-[#2c2531]">
                                        <p className="text-[23px] font-TitlingMed font-semibold">{name}</p>
                                        <div className="w-[.5px] h-[20px] bg-[#1c1c1c]"></div>
                                        <span className="text-[17px] font-apercuBold">Quiz</span>
                                    </div>
                                    <div className={`size-20 ${bg}  absolute bottom-0 left-0 blur-[90px]`}></div>
                                    <div className={`size-20  ${bg} absolute bottom-0 right-0 blur-[90px]`}></div>
                                </div>

                              
                          </>
                      )
                    })
                  }

                   
                                     
                </div>
            </div>
        </div>    

    </div>
    
  )
}

export default Quiz





