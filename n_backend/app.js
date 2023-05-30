import express from 'express';
import teacherRoute from './routes/teacherRoute.js'
import errorMiddleware from './middleware/error.js';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1',teacherRoute);

app.use(errorMiddleware);
export default app;