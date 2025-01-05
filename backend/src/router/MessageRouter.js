import express from 'express'

function MessageRouter(io){
    const router = express.Router()
  
    io.on('connection',(socket)=>{
      console.log(socket.id)
       socket.on('msg',(text)=>{
          socket.broadcast.emit('recive-msg',{resmsg:text})
       })
    })

    router.get('/',(req,res)=>{
       res.send('Connected to the messageing port')
    })

    return router
}

export default MessageRouter