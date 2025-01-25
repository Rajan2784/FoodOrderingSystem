const cloud_name = "dcwqqqqvn";
const upload_preset = "restaurant_app";

export const uploadToCloudinary = async (image) =>{
    if(image){
        const data = new FormData();
        data.append("file",image);
        data.append("upload_preset",upload_preset);
        data.append("cloud_name",cloud_name);

        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
            {method:"post",body:data}
        );
        const fileData = await res.json();
        console.log(fileData.url);
        return fileData.url;
    }else{
        console.log("error");
    }
}