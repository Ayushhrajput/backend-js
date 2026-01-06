require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000;

app.get('/', (req, res)=>{
    res.send("backend with js")
})
app.get('/app', (req, res)=>{
    res.send("<h1>vanilla js</h1>")
})

app.listen(port, () => {console.log(`the app is running on port ${port}`)})