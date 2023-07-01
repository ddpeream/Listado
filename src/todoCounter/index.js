import React from "react";
import { TodoContext } from "../todoContext/todoContext";
import './todoCounter.css'

function TodoCounter () {

    const {todoTotal, completedTodos} = React.useContext(TodoContext)

    return(
        <h1 className='TodoCounter'>
            Has completado {completedTodos} de {todoTotal} TODO´s
        </h1>
    )
}

export {
    TodoCounter,
}