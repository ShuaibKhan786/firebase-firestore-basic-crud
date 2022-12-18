// This app is all about me learning firebase/firestore and performing the crud opeartions in firebase database
// 
// 
import { db } from './firebaseConfig';
// importing all the function/method that we need to use to performed crud operation
import {collection,addDoc, onSnapshot ,deleteDoc, doc} from 'firebase/firestore';
import {  useEffect, useState } from 'react';

function App() {
  // a state to catch the user input
  const [input,setInput] = useState('');
  // a state to give a validation update
  const [isValid,setIsValid] = useState(false);
  // a state that contains all the colors from the database
  const [allColors,setAllColors] = useState([]);
  // a regular expression to check wether the user input in hex color or not
  const regex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  // collection refrence
  // here Colors is the collection which can store a documents with provided refrence id by firestore
  const collRef = collection(db,'Colors');
  // this function addingcolor performed the create operation and add the data in database
  // In firebase/firestore the data is add in collection and document
  const addingColor = async (e) =>{
    // switching off the form behavior
    e.preventDefault();
    const payload = {color : input};
    try{
      // addDoc is method to add the data in the database in which 
      // it tooks two arguments one is collectionRefrence and the other the data or document u want to store 
      // on that collection
      if(regex.test(input)){
        await addDoc(collRef,payload);
        setInput('');
        if(isValid)setIsValid(!isValid);
      }else{
        setIsValid(!isValid);
      }
        
    }catch(e){
      console.log(e);
    }
  }
  // this function readingColor performed the read operation and add the data in database
  // In firebase/firestore the data is read everytime the databse is change  in collection and document
  // we can use setDocs but it will do changes once and cannot render the whole things everytime we do somechange in the databse
  const readingColor = ()=>{
      onSnapshot(collRef,(snapshot)=>{
        // in this it will set an array of objects in ...doc.data() will set an color key with its propety as an example color:#000
        // and doc.id will send an id /document id of that particular id
        setAllColors(snapshot.docs.map(doc=>({...doc.data(),id: doc.id})));
      })
  }
  // this function gonna delete that specific color onclick
  // we will simply use the deleteDoc fucntion 
  const deletingColor = async(id) =>{
    // see how I use doc instead of colollection function/method becz
    // doc method is used to access a specific document within a collection, 
    // while the collection method is used to access a collection of documents.
    // but I need to delete that specific document that store in the colors collection
    // so i have to use doc method
      const docRef = doc(db,'Colors',id);
      await deleteDoc(docRef);
  }
  
  useEffect(()=>{
    readingColor();
  },[]);
  
  return (
    <div className='main-wrapper'>
      {/* this form  submit a color input by the user */}
      <form onSubmit={addingColor}>
        <input type='text' 
          placeholder='hexadecimal color code'
          value={input}
          onChange={(e)=>setInput(e.target.value)}/>
        <input type='submit' value='Submit'/>
      </form>
      {/* validation of userInput */}
      {isValid ? <div>Please use a valid hex color code</div> : ''}
      {/* displying the data that color that is come from firestore database using the onSnapshot function and render that data which is 
       color hex code  */}
      <ul>
        {
          allColors.map(items=>{
            // in using map function in react I need to speacify a key 
            // that key is used as refrence id from the database
            return <div key={items.id} className='display-wrapper'>
                      {/* I am changing the backgorund color according to the  databse */}
                      <div className='custom-div' style={{backgroundColor: items.color}}></div>
                      {/* showing the color code I store in the Colors collection */}
                      <div>Color Code : {items.color}</div>
                      {/* just a button to delete the sepcific color onclick  */}
                      <button onClick={()=>{deletingColor(items.id)}}>delete</button>
                  </div>
          })
        }
        </ul>
    </div>
  );
}

export default App;
