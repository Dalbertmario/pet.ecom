import {io} from 'socket.io-client'
import CustomerCareInputfiled from "../ui/CustomerCareInputfiled";
import { useEffect, useRef, useState } from "react";
import Textarea from "../ui/Textarea";

function Customercare() {
const [cusText,setCusText]=useState([])
const [message,setMessage]=useState([])
const Refsocket=useRef(null);

useEffect(function(){
  Refsocket.current = io('http://localhost:3000')
  Refsocket.current.on('connect',()=>{
    console.log(Refsocket.current.id)
  })
  Refsocket.current.on('recive-msg',(data)=>{
    setMessage((previous)=>[...previous,{text:data.resmsg,sender:'server',timestap:new Date()}])
  })
  return ()=>{
    Refsocket.current.disconnect();
  }
},[])


function handelSendMessage(data){
  console.log(data)
  Refsocket.current.emit('msg',data.text);
  setMessage((previous)=>[...previous,{text:data.text,sender:'user',timestap:new Date()}])
}
console.log(message)

  return (
    <div className="flex flex-col overflow-auto max-w-[1000px] m-auto px-4">
       <div className='h-[92.4vh] flex flex-col justify-end'>
          <div className='justify-end overflow-scroll'>
          {message.map((el)=>(<Textarea msg={el}/>))}
          </div>
          <div className='mb-2'>
          <CustomerCareInputfiled handelSendmsg={handelSendMessage} custext={cusText} setCusText={setCusText}/>
        </div>
       </div>
    </div>
  )
}
export default Customercare