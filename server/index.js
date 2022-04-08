import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';


const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());


//https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://troydomdom:youresuchadommy@cluster0.g57eb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000; 

mongoose.connect(CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`Server tunning on port ${PORT}`)))
.catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);


//ENV variables later 