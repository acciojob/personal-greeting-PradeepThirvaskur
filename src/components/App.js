
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName]=useState("");
  function onChange(event){
    setName(event.target.value);
  }
  return (
    <div>
       <input  value={name} onChange={onChange}>
       </input>
       {name ?  <p>Hello {name}!</p> :  null } 
       
    </div>
  );
}

export default App
