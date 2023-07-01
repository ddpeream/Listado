import React from "react";
import { TodoContext } from "../todoContext/todoContext";
import './createTodoButton.css'

function CreateTodoButton () {
    const {openModal, setOpenModal} = React.useContext(TodoContext)
    const onClickButton =() => {
        console.log('Open Modal', openModal)
       setOpenModal(modal => !modal)
    }
    return(
        <button 
        onClick={onClickButton} 
        className={`CreateTodoButton`}>
        +
        </button>
    )
}

export {
    CreateTodoButton,
}