import AppName from "./components/AppName";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";

const todoList = [
  {
    name : "Buy Milks" ,
    dueDate : "04/04/2023"
  },
  {
    name : "Buy Butter" ,
    dueDate : "05/04/2023"
  },
]

function App () {
  return (<>
 <AppName/>
  <ToDoForm/>
  <ToDoItems todoList ={todoList} />
  </>
  )
}

export default App ;
