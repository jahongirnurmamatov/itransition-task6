import express from 'express';
import dotenv from 'dotenv';
import cors from  'cors';
import { app, io, server } from './lib/socket.io.js';
dotenv.config();

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true, 
  }));

io.on("connection",(socket)=>{
    console.log('A user connected: ',socket.id);

    socket.on('disconnect', () => {
        console.log('A user disconnected: ', socket.id);
    });
});

server.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})