import React from "react"
// import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import { useState } from 'react';
import DisplayToDo from './components/DisplayToDo';
// import axios from "axios";

function App() {

  const [allToDo, setallToDo] = useState([]);
  const addToDo = ({toDo, time, date})=> {
    setallToDo([...allToDo, 
      {
        "todo": toDo,
        "time": time,
        "date": date
    }])
    console.log( allToDo);  
  }


// const getData = () => {
//   let endpoint = "http://localhost:5000/users"
//   axios.get((endpoint))
// }

  return (
    <>
        
        <div className="row mt-4">
        <AddToDo addToDo={addToDo}/>
        <DisplayToDo allToDo={allToDo} setallToDo={setallToDo}/>
    
        </div>
    </>
  );
}

export default App;
