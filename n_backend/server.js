import app from './app.js';
import dotenv from 'dotenv';
import connectDatabse from './config/databse.js';

dotenv.config({path: './config/config.env'});
connectDatabse();
const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});