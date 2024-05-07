import { useEffect, useState } from "react";
import AppName from "./components/AppName";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";
import { getLocalStorageSData, saveToLocalStorage } from "./services/localService";
import TodoService from "./services/TodoService";

function App ()  {
  
const [todoList ,setTodoList ] = useState([]) ; 
const [isEditClicked ,setisEditClicked] =useState(false) ;
const [toDoId ,setToDoId] =useState("") ;
const [editedToDo ,setEditedToDo] =useState({}) ;

useEffect( () => {
  const data = getLocalStorageSData() ;
  setTodoList(data) ;
},[])

  const handleAddTodo = (toDo) => {

  setTodoList(prevTodoList => [...prevTodoList ,toDo]);
   const service = new TodoService() ;
   service.addTodo(toDo)
  }

const updateToDo = (toDo) => {
  // debugger 
  // const allToDos = getLocalStorageSData();
  // const toDos = allToDos.filter(todo => todo.id !== toDoId);
  // const newToDos = [...toDos , toDo];
  // setTodoList(prevTodoList => [...prevTodoList ,newToDos]);
  // const service = new TodoService() ;
  // service.updateNewToDo(toDo ,toDoId)
  const service = new TodoService();
  service.updateNewToDo(toDo, toDoId);

  // Update the todo list state by mapping over the existing list
  setTodoList(prevTodoList => prevTodoList.map(todo => {
    return todo.id === toDoId ? toDo : todo;
  }));
  setisEditClicked(false);
}


  const handleDeleteToDo = (id) => {
    debugger ;
    const service = new TodoService() ;
   let newtoDoList = service.deleteToDo(id);
   setTodoList(newtoDoList);
  }

  const handleEditToDo = (id) => {
    setToDoId(id) ;
    setisEditClicked(true) ; 
    const newToDo =  getToDoById(id) ; 
    debugger
    setEditedToDo(newToDo) ;
  }
  const getToDoById =(id) => {
   const toDo = todoList.find( todo => todo.id === id);   
   return toDo ;   
  }
  return (<>
 <AppName/>
  <ToDoForm 
   handleAddTodo={handleAddTodo}
   updateToDo ={updateToDo}
   isEditClicked={isEditClicked} 
  toDoId={toDoId}
  editedToDo ={editedToDo}
   />
  <ToDoItems 
  todoList ={todoList} 
  handleDeleteToDo={handleDeleteToDo}  
  handleEditToDo={handleEditToDo}
  
  />
  </>
  )
}

export default App ;
