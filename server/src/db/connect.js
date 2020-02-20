import Mongoose from 'mongoose';
import {MONGO_URI, MONGO_OPTIONS} from '../config'

const connectToDb = async() => {
    try {
        await Mongoose.connect(MONGO_URI, MONGO_OPTIONS);
    } catch(err) {
        console.log(`Could not connect to DB: ${err}`);
    }
    console.log('Connected to DB');
    
}

export default connectToDb;