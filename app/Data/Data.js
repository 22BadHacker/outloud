
import { PiSmileyWinkLight, PiSmileyXEyesThin } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";
// import './'

export const MarqueeData = () =>{
    return(
    <>
        <div className={`flex gap-5  items-center`}>
            <PiSmileyWinkLight className='text-[#000]' size={18}/>
            <p className='text-[#343434] font-apercu  text-[13px]'>New year, New Challenges!</p>
            <p className='text-[#232323]    opacity-95 font-bold  text-[13px]'>Your Creativity Has No Limits—Show It Off on OUTLOUD!</p>
            <PiSmileyWinkLight className='text-[#000]' size={18}/>
            <PiSmileyXEyesThin className='text-[#000]' size={18}/>
            <p className='text-[#343434] font-apercu   text-[13px]'>Quizzes, Challenges, Projects—Ready to Conquer?</p>
            <p className='text-[#232323]   opacity-95 font-bold  text-[13px]'>Dare to Dream, Learn, and Achieve!</p>
            <CiFaceSmile className='text-[#000]' size={17}/>
        </div>
    </>
    )
}



// export const Links = [
//     {name: 'Explore', url: '/'}
//     {name: 'Explore', url: '/'}
//     {name: 'Explore', url: '/'}
//     {name: 'Explore', url: '/'}
// ]

   