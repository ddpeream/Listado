import React from "react";
import { useLocalStorag } from "./todoUseLocalStorage";

const TodoContext = React.createContext()

// const todosDefault = [ 

//   {
//     text: 'Hoy en la noche resuelvo 10 ejercicio algebraicos', 
//     completed:true
//   }, 

//   {
//     text: 'Mañana vamos a jugar fútbol', 
//     completed:false
//   },

//   {
//     text: 'Mañana hacer un par de resumen de diferentes textos', 
//     completed:false
//   }, 
  
//   {text: 'Mañana en la noche un poquito de Dance-Hall y Soul', completed:false},
//   ]
   
function TodoProvider (props) {
    const {
        item: todo, 
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorag('TODOS_V1', [])
      
      const [searchValue, setSearchValue] = React.useState('')
      const [openModal, setOpenModal] = React.useState(false)
      
      const completedTodos = todo.filter(todo => !!todo.completed).length
      const todoTotal = todo.length
    
      let searchedTodos = []
    
      if(!searchValue.length>=1){
        searchedTodos= todo
      } else {
        searchedTodos = todo.filter(todos => {
          const todoText = todos.text.toLowerCase()
          const searchText = searchValue.toLowerCase()
          return todoText.includes(searchText)
        } )
      } 
    
      const completeTodo = (text) => {
        const todoIndex = todo.findIndex(todo => todo.text ===text)
        const newTodos = [...todo]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed
        
        saveTodos(newTodos)
      } 
      
      const deleteTodo = (text) => {
        const todoIndex = todo.findIndex(todo => todo.text === text)
        const newTodos = [...todo]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
      }

      const addTodo = (text) => {
        const newTodos = [...todo]
        newTodos.push({
          completed: false,
          text: text
        })
        saveTodos(newTodos)
      }

      return(
        <TodoContext.Provider value={{
            loading,
            error,
            todoTotal,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo, 
            addTodo,
            openModal, 
            setOpenModal
            }}>
            {props.children}
        </TodoContext.Provider>
      )

}

export {
    TodoContext,
    TodoProvider
}