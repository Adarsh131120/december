// require('dotenv').config()

import dotenv from "dotenv"
import express from "express";


import connectDB from "./db/index.js";
const app = express();

dotenv.config({
    path :'./.env'
})



connectDB()
.then(() => {
    // Start the server only if the database connection is successful
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    }); 
})
.catch((err) => {
    console.log("MONGODB CONNECTION ERRORy: ", err);
});






















// import express from "express";
// const app = express();

// (async ()=>{
//     try{
//      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//      app.on("error",()=>{
//         console.log("ERROR :",error);
//         throw error;
        
//      })
//       app.listen(process.env.PORT, ()=>{
//         console.log(`APP is listning on PORT ${process.env.PORT}`);
//       })

//     }catch (error){
//     console.error("ERROR :",error)
//     throw error
//     }
// })() // ifees
