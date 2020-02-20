import User from '../models/user'

const initDB =  async () => {
    const user = new User({ name: "Big Bill Brown" });
    user
      .save()
      .then(user => console.log(`${user.name} saved to the database`))
      .catch(err => console.log(err));
}

export default initDB;