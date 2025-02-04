'use client'
import  {useState, useEffect} from 'react'
import Axios from 'axios';


const Chat = () => {
    const [inputValue, setInputValue] = useState('');
    const [ChatLog, setChatLog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }])
    
        sendMessage(inputValue);
        
        setInputValue('');
      }

      const sendMessage = (message) => {
        const url = 'https://api.openai.com/v1/chat/completions';

        const header = {
            'Content-type' : 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        }
    
        const data = {
          model: "gpt-4o",
          store: true,
          messages: [{ "role": "user", "content": message }]
        };
    
        setIsLoading(true);
    
        Axios.post(url, data, {headers: header}).then((response) => {
          console.log(response);
          setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content }])
          setIsLoading(false);
        }).catch((error) => {
          setIsLoading(false);
          console.log(error);
        })
      }



  return (
    <>
         <div className="container max-w-[1650px] mx-auto px-10 h-full w-full flex flex-col py-8">
            <h1 className='text-[30px] text-black opacity-75 leading-tight font-apercuBold font-semibold'>O+ Ai</h1>

           {
                ChatLog.map((item, i) => (
                    <div key={i}>{item.message}</div>
                ))
           }

           

            <form onSubmit={handleSubmit} className='bg-[#eee] w-fit flex gap-3 overflow-hidden  rounded-full p-1' action="">
                <input className='outline-none w-[300px] py-0 px-4 bg-[#eee]' autoFocus value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='Enter your message' />

                <button className='text-black/50 hover:bg-[#f8f8f8] transition-all duration-200 ease-in-out shadow-sm font-semibold border-[.5px] border-black/20  py-3 px-8 rounded-full'>Send</button>
            </form>
        </div>
    </>
  )
}

export default Chat




























































{/* // 
//     ChatLog.map((item, index) => (
//         <div key={index} className={`flex ${item.type === 'user' ? 'flex-row-reverse' : ''} gap-3 my-3`}>
//             <div className={`flex items-center ${item.type === 'user' ? 'flex-row-reverse' : ''} gap-3`}>
//                 <div className={`w-10 h-10 rounded-full bg-[#f8f8f8] flex items-center justify-center ${item.type === 'user' ? 'flex-row-reverse' : ''}`}>
//                     {item.type === 'user' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#ff472b]">
                    
// } */}
