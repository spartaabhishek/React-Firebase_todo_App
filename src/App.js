import React,{useState,useEffect} from 'react';
import {Button,FormControl, Input,InputLabel} from '@material-ui/core'
import Todo from './todo'
import './App.css';
import db from './firebase'
import firebase from 'firebase'

function App() {
 const[todos, setTodos]= useState([])
 const[input,setInput]= useState('')

 //when the app loads we need tolisten to database and fetch new todod as they get addaed/remove
useEffect(() => {
  //this code fires when the app loads
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => doc.data().todo))
  })
}, []);
 
//  console.log(input)
const addToDo=(e)=>{
  //this will fire on click
  e.preventDefault();
  db.collection('todos').add({
    todo: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  setTodos([...todos,input])
  setInput('');//clear up the input
}
  return (
    <div className="App">
      <h1>hello world</h1>
      
      <form>
      <FormControl>
      <InputLabel>Write a todo</InputLabel>
      <Input  value={input} onChange={e => setInput(e.target.value)}/>
      
      <Button disabled={!input} type="submit" onClick={addToDo} variant="contained" color="primary">
      Add todo
      </Button>
      </FormControl>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo}></Todo>
          // <li>{todo}</li>
  ))}
      </ul>
    </div>
  );
}

export default App;
