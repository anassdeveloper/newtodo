import React, { useState } from 'react';
import Form from "./Component/Form";
import "./App.css";



function App(){

    const [inputText, seText] = useState("");
    const [items, setItem] = useState([]);

    function headText(e){
       const newValue = e.target.value;
       seText(newValue)
    }
    
    function addItem(e){
        setItem(prev => [...prev, inputText])
        e.preventDefault()
        seText("")
    }
    
    return (
            <div className='container'>
               <div className='heading'>
                   <h1>To-do List</h1>
               </div>
               <div>
                   <Form valInput = {inputText} fnChange = {headText} addNew = {addItem}/>
               </div>
               <ul className='list'>
                  {items.map(todo => <li>{todo}</li>)}
               </ul>
            </div>
        )

}
export default App;