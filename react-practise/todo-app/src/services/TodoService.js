import { getLocalStorageSData, saveToLocalStorage } from "./localService";

export default class TodoService {
   todoArray = [];

   addTodo = (toDo) => {
      debugger
      this.todoArray= getLocalStorageSData() ;
      const newToDos = [...this.todoArray, toDo];
      saveToLocalStorage(newToDos);
   }

   deleteToDo = (id) => {
      debugger;
      this.todoArray = getLocalStorageSData();
      const newtoDoList = this.todoArray.filter((obj) => obj.id !== id);
      saveToLocalStorage(newtoDoList);
      return newtoDoList
   }


   updateNewToDo = (toDo, toDoId) => {
      debugger
      const allToDos = getLocalStorageSData();
      const toDos = allToDos.filter(todo => todo.id !== toDoId);
      const newToDos = [...toDos , toDo];
       saveToLocalStorage(newToDos) ;
   }
}