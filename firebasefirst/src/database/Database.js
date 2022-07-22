import React from 'react';
import { useState } from 'react';
import { db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore'

    const collectionRef = collection(db, 'user2');
  const [add , setAdd] =useState("abubakar");
    // const [Fname, setFname] = useState("");
    const onClickAddHandler =  () => {
       addDoc(collectionRef, {
            // name: name,
            // Fname: Fname
        })

    };


export default function Database() {
  return (
    <div>
      {add}
      {/* <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)}/> */}
    {/* <input type="text" name='fname' value={Fname} onChange={(e)=>setFname(e.target.value)} /> */}
   <button onClick={onClickAddHandler}>send data to storage</button>
    </div>
  )
}
