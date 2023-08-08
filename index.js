import cors from 'cors'
import mongoose from 'mongoose'
import useMiddleware from 'express'
import bodyParser from 'body-parser'
import postRoutes from './routes/posts.js' 
import express from 'express'

const app = express()
app.use(bodyParser.json({limit: "30mb",extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}))
app.use(cors())
app.use('/posts',postRoutes)


const CONNECTION_URL = ''
const PORT = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT,()=> console.log(`listening on port ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`))