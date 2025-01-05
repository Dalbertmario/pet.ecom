import { useQuery } from '@tanstack/react-query'
import {io} from 'socket.io-client'
async function chattingData(){
   try{
     const socket= io('http://localhost:3000')
     return socket
   }catch(err){
    throw new Error(err)
   }
}

function UseChattingData(){
    const {data} = useQuery({
        queryKey:['chat'],
        queryFn:chattingData
    })
    return {data}
}
export default UseChattingData;