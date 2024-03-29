
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
import express from 'express';


// import userRoute from './routes/users.js'
// import authRoute from './routes/auth.js'
// import tourRoute from "./routes/Tours.js";
// import reviewRoute from './routes/reviews.js'
// import bookingRoute from './routes/booking.js'

 dotenv.config();
const app=express();
const port=process.env.PORT || 800;
const corsOption={
  origin:true,
  credentials:true
}
//   database connections

mongoose.set("strictQuery",false);
const connect=async()=>{
    try{
      await mongoose.connect('mongodb+srv://Taterao:1431@cluster2.ycaseqo.mongodb.net/?retryWrites=true&w=majority',{
            //  useNewUrlParser: true,          
            // useUnifiedTopology: true,      
            // useCreateIndex: true,           
            // useFindAndModify: false
      })
      console.log('MongoDb database connected')
    }catch(err){
       console.log('mongodb database connection failed')
    }
} 
// mongoose.connect(process.env.MONGO).then(()=>{
//   console.log('Connected to MongoDB..')
// }).catch((err)=>{
//   console.log('failed to connect mongoose')
// })
console.log('working nodemon 2')

//midleware  fv
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
// app.use('/Api/V1/users',userRoute)
// app.use('/Api/V1/auth',authRoute)
// app.use('/Api/V1/tour', tourRoute);
// app.use('/Api/V1/review',reviewRoute)
// app.use('/Api/V1/booking',bookingRoute)

app.listen(port, ()=>{
    connect();
    console.log('server listening on port',port);
} )
