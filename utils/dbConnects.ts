import mongoose from 'mongoose'

const connection:any = {} /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return
  }

  /* connecting to our database */
  const db = await mongoose.connect(`mongodb+srv://dc-web:${process.env.SECRET_KEY}@cluster0-khych.mongodb.net/Org?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect