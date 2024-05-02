import { useState } from "react";
import AppName from "./components/AppName";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";




function App () {
  
// const todoList = [
//   {
//     name : "Buy Milks" ,
//     dueDate : "04/04/2023"
//   },
//   {
//     name : "Buy Butter" ,
//     dueDate : "05/04/2023"
//   },
// ]


const [todoList ,setTodoList ] = useState([]) ; 

  const handleAddTodo = (toDo) => {
    console.log(`toDoItem = ${toDo.name} , date = ${toDo.dueDate}`);
    const newToDos = [...todoList , toDo];
    console.log(newToDos);
    setTodoList(newToDos);
    
  }
  const handleDeleteToDo = (id) => {
    deleteToDo(id) ;
  }

  const deleteToDo = (id) => {
    const newtoDoList = todoList.filter((obj) => obj.name !== id)  ;
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
