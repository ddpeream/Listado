import React from "react";
import {useState} from "react";
import { TodoContext } from "../todoContext/todoContext";
import './todoForm.css'

function TodoForm () {

    const [newTodoValue, setNewTodoValue] = useState('');

    const {addTodo, setOpenModal} = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
      };

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
        setNewTodoValue('')
    }

    return(
        <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Cortar la cebolla para el almuerzo"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
            >
            Cancelar
          </button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >
            Añadir
          </button>
        </div>
        </form>
    )
}

export {TodoForm}