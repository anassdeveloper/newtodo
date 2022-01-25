import React from 'react';
import Input from './Input';

function Form(props){
    return (
        <form>
            <Input 
                 onRight = {props.fnChange}
                 type = "text"
                 place = "add new work"
                 val = {props.valInput}
            />
            <button onClick={props.addNew}>add</button>
        </form>
    )
}

export default Form;