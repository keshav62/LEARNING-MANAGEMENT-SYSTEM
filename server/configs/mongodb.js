import mongoose from "mongoose";

// connect to MongoDb database 

const connectDB = async ()=> { 
  mongoose.connection.on('connected', ()=> console.log('Database Connected')) ; 
  
  await mongoose.connect(`${process.env.MONGODB_URL}/lms`) 
}

export default connectDB ; 