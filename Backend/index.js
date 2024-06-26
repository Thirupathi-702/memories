import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);


app.get('/', (req, res) => {
    res.send('Hello to Memories Api');
});

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://gudithirupathi02:thiru@database01.qe0b4xx.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
.catch((error) => console.log(error.message));
//Model.findOneAndUpdate(filter, update, { new: true, useFindAndModify: false }, callback);
// mongoose.set('useFindAndModify', false);
//process.env.CONNECTION_URL