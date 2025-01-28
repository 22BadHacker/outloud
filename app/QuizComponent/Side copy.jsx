'use client'
import React,{useState} from 'react'
import out from '@/public/Logo/black.svg'
import Image from 'next/image'
import { GoChevronDown } from "react-icons/go";
import { BuroItem, Civil, graphicItm, webItem } from '../Data/Data';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Comp = ({name, icon, url, i, variant})=> (
    <motion.div key={i} variants={variant} animate='show' initial='hidden' transition={{duration: 0.2, delay: i*0.1, ease: 'easeInOut'}}>

    <Link  href={url} className='relative pl-12 hover:text-[#ff472b] duration-200 ease-in-out text-[#64646a]/100 text-[15px]  flex gap-2 items-center'><span className='absolute w-[32px] h-[.5px] left-2  rounded-full bg-[#000]/20'></span> {icon} {name}</Link>
    </motion.div>
)



const Side = () => {
    
    const Title = ({clickMe, name, statee}) => (
        <p onClick={clickMe} className='uppercase  hover:text-[#ff472b] bg-[#f4f4f5] cursor-pointer duration-200 ease-in-out rounded-md px-2 py-1 flex items-center w-full justify-between text-[15px] font-apercu text-[#58585e]'>{name} <GoChevronDown style={{transition: '250ms'}} className={statee ? 'rotate-180 duration-200 ease-in-out' : 'duration-200 ease-in-out'} size={17}/></p>
    
    )
    const variant = {
        hidden: {
            opacity: 0,
            scale: 1.1,
            filter: 'blur(5px)'
        },
        show: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)'
           
        }
    }

    const [show, setShow] = useState(true)
    const [graphic, setGraphic] = useState(false)
    const [buro, setBuro] = useState(false)
    const [ginie, setGinie] = useState(false)
    const [english, setEnglish] = useState(false)
  return (
    <div className='w-[300px] pb-4 pr-2 flex overflow-x-hidden flex-col gap-3 h-[80vh] overflow-y-scroll sticky top-0 left-0 '>
        <div className="flex items-center gap-2 pb-3 mb-2 sticky z-10 top-0 left-0 w-full h-fit  bg-[#f8f8f8]">
            <h1 className='text-[20px] h-fit hover:text-[#ff472b] cursor-pointer duration-200 ease-in-out bg-[#f4f4f5] rounded-md px-3 py-1 text-black opacity-75 leading-tight font-apercuBold font-semibold'>Quizzes</h1>
            <div className="w-[.5px] h-6 bg-orange-500"></div>
            <h5 className='text-[15px] h-fit   px-2 py-1 text-black leading-tight font-apercuBold '>Get Started</h5>
            
            
        </div>


      <div className="w-full flex flex-col gap-3 ">
            <Title name={'Web Devlopment'} statee={show} clickMe={() => setShow(!show)}/>
            {show &&
                <div  className="flex relative flex-col gap-3   my-1">
                    <div className="w-[.5px] h-full absolute top-0 left-2 bg-[#000]/20"></div>

                    {webItem.map((item,i)=> {
                        const {name, icon, url} = item
                        return(
                            
                            <Comp key={i} name={name} icon={icon} url={url} i={i} variant={variant}/>
                        )
                    })
                    }
            </div> 
            }
      </div>


      <div className="w-full flex flex-col gap-3 ">
      <Title name={'Grapgic design'} statee={graphic} clickMe={() => setGraphic(!graphic)}/>
            {
                graphic &&
                <div className="flex relative flex-col gap-3   my-1">
                <div className="w-[.5px] h-full absolute top-0 left-2 bg-[#000]/20"></div>

                {graphicItm.map((item,i)=> {
                    const {name, icon, url} = item
                    return(
                        <Comp key={i} name={name} icon={icon} url={url} i={i} variant={variant}/>
                        
                    )
                })
                }
            </div>   
            }         
      </div>


      <div className="w-full flex flex-col gap-3 ">

            <Title name={'office software'} statee={buro} clickMe={() => setBuro(!buro)}/>
            {
                buro &&

                <div className="flex relative flex-col gap-3   my-1">
                <div className="w-[.5px] h-full absolute top-0 left-2 bg-[#000]/20"></div>

                {BuroItem.map((item,i)=> {
                    const {name, icon, url} = item
                    return(
                        
                        <Comp key={i} name={name} icon={icon} url={url} i={i} variant={variant}/>
                    )
                })
                }
            </div> 
            }    

      </div>
     
      <div className="w-full flex flex-col gap-3 ">
            <Title name={'genie civil'} statee={english} clickMe={() => setEnglish(!english)}/>
            {
                english &&

                <div className="flex relative flex-col gap-3   my-1">
                <div className="w-[.5px] h-full absolute top-0 left-2 bg-[#000]/20"></div>

                {Civil.map((item,i)=> {
                    const {name, icon, url} = item
                    return(
                        
                        <Comp key={i} name={name} icon={icon} url={url} i={i} variant={variant}/>
                    )
                })
                }
            </div> 
            }    

      </div>

      <div className="w-full flex flex-col gap-3 ">
            <Title statee={ginie} name={'English language'} clickMe={() => setGinie(!ginie)}/>
            {
                ginie &&

                <div className="flex relative flex-col gap-3   my-1">
                <div className="w-[.5px] h-full absolute top-0 left-2 bg-[#000]/20"></div>

                {Civil.map((item,i)=> {
                    const {name, icon, url} = item
                    return(
                        
                        <Comp key={i} name={name} icon={icon} url={url} i={i} variant={variant}/>
                    )
                })
                }
            </div> 
            }    

      </div>


    </div>
  )
}

export default Side
