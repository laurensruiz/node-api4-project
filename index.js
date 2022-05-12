require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

const PORT = process.env.PORT || 9000

server.get('/api/hello', (req, res)=>{
    res.json({
        message: "api is working"
    })
})



server.use('*', (req, res)=> {
    res.send(`<h1>Hello!</h1>`)
})

//error handler

//eslin disable is important to comment!
server.use((err, req, res, next)=>{ // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`)
})

console.log(process.env.PORT, process.env.NODE_ENV)
