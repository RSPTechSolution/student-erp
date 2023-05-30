import mongoose from 'mongoose';

const connectDatabse = () => {
    mongoose.connect(process.env.MONGOO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () =>{
        console.log('connected to db');
    })
}

export default connectDatabse;