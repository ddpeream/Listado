import React, { useContext } from "react";
import { TodoCounter } from "../todoCounter/index";
import { TodoSearch } from "../todoSearch/index";
import { TodoList } from "../todoList/index";
import { TodoItem } from "../todoItem/index";
import { CreateTodoButton } from "../createTodoButton/index";
import { TodoContext } from "../todoContext/todoContext";
import { Modal } from "../modal";
import { TodoForm } from "../todoForm";

function AppUi() {
  const {
    text,
    completed,
    loading,
    error,
    completedTodos,
    todoTotal,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  console.log("SEARCH-TODO");

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Aquí hubo un error mano</p>}
        {loading && <p>cargando...</p>}
        {!loading && !searchedTodos.length && (
          <p>Tenga el honor de crear el primer Todo´s</p>
        )}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUi };
