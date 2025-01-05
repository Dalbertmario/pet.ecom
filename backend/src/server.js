import express from 'express'
import cors from 'cors'
import MessageRouter from './router/MessageRouter.js'
import authentication from './router/authentication.js'
import userrouter from './router/userrouter.js'
import {sequelize} from './config/dbconnect.js'
import dotenv from 'dotenv'
import http from 'http'
import { Server } from 'socket.io'
import dashRouter from './router/dashRouter.js'
import productroute from './router/productsroute.js'
const app = express()
dotenv.config();
app.use(cors());
app.use(express.json())
///////////////////////////////////////////////
const PORT = process.env.PORT
const httpServer = http.createServer(app)


const dbconnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
        process.exit(1);
    }
};

dbconnect()
//Connection status
app.get('/',(req,res)=>{
    res.send('Logged In')
    console.log('Logied')
})
//Socket.io
const io = new Server(httpServer,{
    cors:{
        origin:'*'
    }
})

//Routes
app.use('/message',MessageRouter(io))
app.use('/auth',authentication)
app.use('/user',userrouter)
app.use('/userdash',dashRouter())
app.use('/products',productroute)
console.log(process.env.PORT)

httpServer.listen(PORT,()=>{
    console.log(`Server running in http://localhost:${PORT}`)
})