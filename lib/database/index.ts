import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI
console.log(MONGODB_URI)

let cached = (global as any).mongoose || {connection: null, promise: null}

export const connectToDatabase = async () => {
  if(cached.connection){
    return cached.connection
  }

  if(!MONGODB_URI) throw new Error("MONGODB_URI is missing")


    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
      dbName: 'eventro',
      bufferCommands: false,
    })
  
    cached.conn = await cached.promise;
  
}