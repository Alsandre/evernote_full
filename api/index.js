import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import multer from "multer"
import path from "path"
import { userLogin } from "./routes/users.js"
import { createNote, getNotes, getSingleNote, deleteSingleNote} from "./routes/notes.js"

const app = express()
app.use(cors({origin: 'http://localhost:3000', credentials: true})); 
app.use(cookieParser()); 
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static('uploads'))

const port = process.env.PORT || 3300
app.get('/', (req, res)=>{
    res.send('hello world')
})


app.post('/googleauth', userLogin)
app.post('/createnote', createNote)
app.get('/getnotes', getNotes)
app.get('/notes/:id', getSingleNote)
app.delete('/notes/deletenote/:id', deleteSingleNote)

app.listen(port)