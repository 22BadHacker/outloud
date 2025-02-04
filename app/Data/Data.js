
import { PiSmileyWinkLight, PiSmileyXEyesThin } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";;
import { FaHtml5, FaJava, FaCss3Alt, FaReact, FaJs} from "react-icons/fa";
import { BiLogoPython } from "react-icons/bi";
import { SiAdobeindesign, SiAdobephotoshop, SiAutocad, SiAutodeskrevit, SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiAdobeillustrator } from "react-icons/si";
import { PiMicrosoftPowerpointLogoThin } from "react-icons/pi";
import { PiMicrosoftWordLogoLight } from "react-icons/pi";
import { PiMicrosoftExcelLogoThin } from "react-icons/pi";

import white from '@/public/Logo/Orange.svg'
import { PiCodeLight } from "react-icons/pi";
import { MdOutlineCss, MdOutlineHtml } from "react-icons/md";
import Image from "next/image";


// import './'

export const MarqueeData = () =>{
    return(
    <>
        <div className={`flex gap-5  items-center`}>
            <PiSmileyWinkLight className='text-[#000] emo' size={18}/>
            <p className='text-[#343434] font-apercu  text-[13px]'>New year, New Challenges!</p>
            <p className='text-[#232323]    opacity-95 font-bold  text-[13px]'>Your Creativity Has No Limits—Show It Off on OUTLOUD!</p>
            <PiSmileyWinkLight className='text-[#000] emo' size={18}/>
            <PiSmileyXEyesThin className='text-[#000] emo' size={18}/>
            <p className='text-[#343434] font-apercu   text-[13px]'>Quizzes, Challenges, Projects—Ready to Conquer?</p>
            <p className='text-[#232323]   opacity-95 font-bold  text-[13px]'>Dare to Dream, Learn, and Achieve!</p>
            <CiFaceSmile className='text-[#000] emo' size={17}/>
        </div>
    </>
    )
}






export const webItem = [
    {name: 'Java', icon:<FaJava  size={18}/>, url: ''},
    {name: 'HTML', icon:<FaHtml5  size={18}/>, url: ''},
    {name: 'CSS', icon:<FaCss3Alt  size={18}/>, url: ''},
    {name: 'JavaScript', icon:<FaJs  size={16.5}/>, url: ''},
    {name: 'Python', icon:<BiLogoPython  size={19}/>, url: ''},
    {name: 'React', icon:<FaReact  size={18}/>, url: ''},
    {name: 'PHP', icon:<SiPhp  size={22}/>, url: '/Quizzes/Php/'},
    {name: 'MySQL', icon:<GrMysql  size={18}/>, url: ''},
]

export const graphicItm = [
    {name: 'Illustrator', icon:<SiAdobeillustrator  size={18}/>, url: ''},
    {name: 'Photoshop', icon:<SiAdobephotoshop  size={18}/>, url: ''},
    {name: 'inDesign', icon:<SiAdobeindesign  size={18}/>, url: ''},
    
]

export const BuroItem = [
    {name: 'PowerPoint', icon:<PiMicrosoftPowerpointLogoThin  size={18}/>, url: ''},
    {name: 'Word', icon:<PiMicrosoftWordLogoLight  size={18}/>, url: ''},
    {name: 'Excel', icon:<PiMicrosoftExcelLogoThin  size={18}/>, url: ''},
    
]

export const Civil = [
    {name: 'AUTOCAD', icon:<SiAutocad  size={16.5}/>, url: ''},
    {name: 'REVIT', icon:<SiAutodeskrevit  size={16.5}/>, url: ''},    
]





const icons = [
    {icon: <FaJs className=' text-yellow-400  absolute bottom-120  -left-5 text-[80px]   blur-[1px] rotate-12'/>},
    {icon: <FaReact className=' text-[#5ed3f3] absolute -right-5 bottom-0  text-[90px] blur-[2px] rotate-12'/>},
  ]

export const WebCard = () => (
    <div className="h-[350px] shadow-md text-center z-[1] overflow-hidden justify-between relative flex flex-col items-center gap-2 p-1 rounded-md bg-[#eee] border-[.5px]">
        <div className={`absolute bg-red-500 z-[-1] bottom-1 left-1 size-[150px] rounded-full opacity-80 blur-[100px]`}></div>
      
        <div className="flex w-full justify-center absolute top-[50px] left-1/2 -translate-x-1/2 gap-3 items-center z-[2]">
        <Image className="saturate-200" src={white} alt="loud" width={90} />
        <div className="w-[1px] h-[20px] bg-black/30"></div>
        <p className="text-[19px] font-apercu text-[#2c2531]/80">Web Development</p>
        </div>
        <p className="absolute w-full bottom-3 text-[#2c2531] font-Titling text-[18px] z-[2]">Quizzes</p>
        
       
        <FaJs className=' text-yellow-400  absolute bottom-[140px]  -left-5 text-[80px]   blur-[1px] rotate-12'/>
        {/* <GrMysql className=' text-[#015d88] absolute -right-5 top-[100px]  text-[70px] blur-[2px] '/> */}
        <FaReact className=' text-[#5ed3f3] absolute -right-5 bottom-10  text-[90px] blur-[2px] rotate-12'/>

    </div>
)



export const WebItems = [
    {icon: <FaHtml5 className='text-[#dd4b25]'/>, name: 'HTML'},
    {icon: <FaJs className="text-[#efd81d]"/>, name: 'JavaScript'},
    {icon: <FaReact className="text-[#5ed3f3]"/>, name: 'React'},
    {icon: <FaCss3Alt className="text-[#006cb4]"/>, name: 'CSS'},
    {icon: <FaJava className="text-[#4d7c98]"/>, name: 'Java'},
]

export const WebItems2 = [
    {icon: <FaHtml5 />, name: 'HTML', bgColor: true},
    {icon: <FaJs />, name: 'JavaScript'},
    {icon: <FaReact />, name: 'React', bgColor: true},
    {icon: <FaCss3Alt />, name: 'CSS'},
    {icon: <FaJava />, name: 'Java', bgColor: true},
    {icon: <BiLogoPython size={24} />, name: 'Python'},
    {icon: <GrMysql />, name: 'MySQL', bgColor: true},
]

export const Web = () => {
    return(
    <div className="h-[400px] shadow-md text-center z-[1] overflow-hidden justify-between relative flex flex-col items-center gap-2 p-1 rounded-md bg-[#eae9ee] border-[.5px]">
        <FaJs className=' text-yellow-400  absolute -top-2  -left-2 text-[80px]   blur-[1px] '/>
        <FaJs className=' text-yellow-400  absolute -bottom-[9px]  -right-2 text-[80px]   blur-[1px] '/>

        <div className="flex items-center gap-4 justify-center w-full h-full">
            <p className="text-[25px]  flex gap-3 items-center font-apercuBold font-bold  text-[#2c2531]/80"> <FaJs/> JavaScript</p>
            <div className="w-[1px] h-[20px] bg-black/30"></div>
            <p className=" text-[#2c2531] font-apercu text-[20px] z-[2]">Quiz</p>

        </div>
    </div>  
    )
}



