import React from 'react'
import { useState } from 'react';
import { db } from '../config/firebase';
import { addDoc, collection, getDocs, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';




export default function Databasefb() {
  //add collection
  const collectionRef = collection(db, 'user2');
  // read doc


  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [datas, setDatas] = useState([]);
  const onClickAddHandler = async () => {
    await addDoc(collectionRef, {
      name: name,
      Fname: fname
    })
    setFname("");
    setName("");
  };
  const onClickReadHandler = async () => {
    //Data Read From Firebase
    try {
      const name = await getDocs(collection(db, "user2"));
      // console.log(name);
      setDatas(name.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(name);
    } catch (error) {
      alert(error)

    }


  }


  const onClickUpdateHandler = async () => {
    // update firebase database 
    try {
      const updateDocss = doc(db, "user2", "todmuZZmuVXBqeSB7TDH");
      await updateDoc(updateDocss, {
        Fname: 'raza',
        name: 'abubakar'
      });
      alert("data is updated")
    } catch (error) {
      alert(error)
    }

  };
  const onClickDeleteHandler = async () => {
    // delete Data
    try {
      const deleteData = doc(db, "user2", "todmuZZmuVXBqeSB7TDH");
      await deleteDoc(deleteData);
      alert('data is deleted');
    } catch (error) {
      alert(error)
    }

  }
  return (
    <div>

      <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" name='fname' value={fname} onChange={(e) => setFname(e.target.value)} />
      <button onClick={onClickAddHandler}>send data to database</button>
      <button onClick={onClickReadHandler}>Read Data From Firebase</button>
      <button onClick={onClickUpdateHandler}>Update Data Handler</button>
      <button onClick={onClickDeleteHandler}>Delete Data Handler</button>
      {datas.map((data) => (

        <>
          <div key={data.id}>
            <p>{data.name}</p>
            <p>{data.id}</p>
          </div>
        </>
      ))}
    </div>
  )
}
