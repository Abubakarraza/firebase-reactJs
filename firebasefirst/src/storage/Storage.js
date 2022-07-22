import React from 'react'
import { useState } from 'react';
import { app, storage } from '../config/firebase';
import { ref,
  uploadBytesResumable,
  getDownloadURL,
deleteObject } from 'firebase/storage';
export default function Storage() {
  const [data, setData] = useState({});
  const [progress,setProgress]=useState(0);
  const[image,setImage]=useState("");

  // const storageRef = ref(storage);
  // const imagesRef = ref(storage, data);
  const onClickFileHandler = async() => {
   const storageRef=ref(storage,"images/"+data.name);
    setImage(data.name);
   const uploadTask=uploadBytesResumable(storageRef,data);
   uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setProgress(progress);
  },
  (error) => {
    alert(error)
  },
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
     
    });
  }
);


  
  }
  const onDeleteHandler =async () =>{
console.log("deleting image");
  try {
    const desertRef = await ref(storage, "images/"+image.toString());
    deleteObject(desertRef);
    alert("image is Successfully Deleted")
  } catch (error) {
    alert(error)
    
  }
};
  return (
    <div>
      <input type="file"accept='image/*'  name='file' onChange={(e) => setData(e.target.files[0])} />
      <button onClick={onClickFileHandler}>submit</button>
     <h1>{progress}</h1>
     <button onClick={onDeleteHandler}>delete Image</button>
     
   
    </div >
  )
}

