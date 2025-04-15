import express from 'express'
import morgan from 'morgan'
import diarieRouter from './routes/diaries'

const app = express()


app.use(express.json())
app.use(morgan('dev'))

const PORT = 3001

app.get('/ping', (_req, res)=>{
    console.log("ping " + new Date().toLocaleDateString());
    res.send("pong")
    
})

app.use('/api/diaries', diarieRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
    
})