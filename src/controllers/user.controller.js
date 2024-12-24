import { asyncHandler } from "../utils/aysnchandler.js";

const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"winter backend"
    })
})




export {registerUser}