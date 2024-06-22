import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/todoRoute.mjs'; 

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ayushsrivastava0609:IHgsiJWoqUAHAFMR@cluster0.hixx8wd.mongodb.net/ToDoList")
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));

app.use('/', router);

app.listen(8000, () => {
    console.log('Server Started on port', 8000);
});
