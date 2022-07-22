import React from "react";
import { useState } from "react";
import {auth, db} from "./config/firebase";

import { createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";

import Databasefb from "./database/Databasefb";
import Storage from './storage/Storage'
function App() {
  
 const[email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const [data,setData]=useState([]);
 let googleProvider=new GoogleAuthProvider();

const onClickHandler  = (e)=>{
  e.preventDefault();
if (!email || !password) {
  return alert("please type email and password")
  
}
const newEntry={
  email:email,
  password:password
};
setData([...data,newEntry]);
// createUserWithEmailAndPassword(auth,data.email,data.password)
// .then((response) =>{
//   console.log(response.user);
// })
// .catch((err)=>{
//   alert(err.message)
// }
// );
 createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });

setEmail("");
setPassword("");
};
const onSignInHandler=()=>{
  signInWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{

    const user =userCredential.user;
  })
  .catch((error) => {
     const errorCode = alert(error);
    const errorMessage = error.message;
    // ..
  });
  setEmail("");
setPassword("");
};
    const onGoogleHandler=async()=>{
      signInWithPopup(auth,googleProvider)
      // .then((userCredential)=>{

      //   const user =userCredential.user;
      // })
      // .catch((error) => {
      //    const errorCode = alert(error);
      //   const errorMessage = error.message;
      //   // ..
      // });

try {
  const adb= async(userCredential)=>{
   const user=await userCredential.user;
  }
} catch (error) {
  alert(error)
};
setEmail("");
setPassword("");
    }

  return (
    <>
    <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="E-mail" />
    
    <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
   <br />
    <button onClick={onClickHandler}>Submit</button>
    <button onClick={onSignInHandler}>Sign In</button>
    <button onClick={onGoogleHandler}>google</button>
  <Storage></Storage>

  <Databasefb/>
 
     
    </>
  );
}

export default App;
