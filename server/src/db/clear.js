import User from '../models/user'

const clearDb = async () => {
    try {
        await User.deleteMany({})
    } catch (err) {
        console.log(err);
        
    }
    console.log('Cleared DB');
}

export default clearDb;