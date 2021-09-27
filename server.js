import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

dotenv.config({path: './.env'})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({orgin: (origin, callback) => callback(null, true), credentials: true}))

const port = process.env.NODE_ENV == 'production' ? (process.env.PORT || 80): 4000



app.get('/', (_, res) =>{
    res.send("<h1>Hello World</h1>")
})

app.listen(port, () => {
    console.log(`Sever listening to port ${port}`)
})

