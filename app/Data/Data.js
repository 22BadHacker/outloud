
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