const express = require('express')
const app = express()

app.get('*',(req,res) =>{
    res.sendFile(__dirname + '/public/html/error.html')
})

app.listen(3000 , () => {
    console.log("start server is [3000]")
})