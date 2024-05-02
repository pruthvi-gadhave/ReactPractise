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
  return (<>
 <AppName/>
  <ToDoForm handleAddTodo={handleAddTodo}/>
  <ToDoItems todoList ={todoList} />
  </>
  )
}

export default App ;
