import { useEffect, useState } from "react";
import AppName from "./components/AppName";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";
import { getLocalStorageSData, saveToLocalStorage } from "./services/localService";
import TodoService from "./services/TodoService";

function App ()  {
  
const [todoList ,setTodoList ] = useState([]) ; 

useEffect( () => {
  const data = getLocalStorageSData() ;
  setTodoList(data) 
},[])

  const handleAddTodo = (toDo) => {

    setTodoList(prevTodoList => [...prevTodoList ,toDo]);
   const service = new TodoService() ;
   service.addTodo(toDo)
  }
  const handleDeleteToDo = (id) => {
    const service = new TodoService() ;
   let newtoDoList = service.deleteToDo(id);
   setTodoList(newtoDoList);
  }


  return (<>
 <AppName/>
  <ToDoForm handleAddTodo={handleAddTodo}/>
  <ToDoItems todoList ={todoList} handleDeleteToDo={handleDeleteToDo} />
  </>
  )
}

export default App ;
