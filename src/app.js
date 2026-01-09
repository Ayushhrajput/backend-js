import 'dotenv/config'
import express from 'express'
const app = express()

const port = process.env.PORT;

app.get('/', (req, res)=>{
    res.send("backend with js")
})
app.get('/app', (req, res)=>{
    res.send("<h1>vanilla js</h1>")
})

app.listen(port, () => {console.log(`the app is running on port ${port}`)})