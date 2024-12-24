import {v2 as cloudinary} from "cloudinary"

 

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_KEY, 
        api_secret: process.env.CLOUDINARY_SECRET
    });

      

     const uploadOnCloudinary = async(localFilePath)=>{
        try {
            if(!localFilePath) return null
            // upload the file on cloudinary
               const response =   await cloudinary.uploader.upload(localFilePath ,{
            resource_type :"auto"
           })
           // file has been uploaded successfuly
           console.log("file is uploaded on cloudinary",response.url);
           return response;


            
        } catch (error) {
               fs.unlinkSync(localFilePath) // remove the locally saved
                 // temporary files as the upload operation got failed
                 return null;

        }
     }


    // const uploadResult = await cloudinary.uploader
    //    .upload(
    //        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //            public_id: 'shoes',
    //        }
    //    )
    //    .catch((error) => {
    //        console.log(error);
    //    });
    // 7 : 24
    
    