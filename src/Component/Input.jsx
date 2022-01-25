import React from 'react';

function Input(props){
    return (
        <input 
           value = {props.val}
           type = {props.type} 
           placeholder={props.place}
           onChange={props.onRight} />
    )
}
export default Input;