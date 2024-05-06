import { getLocalStorageSData, saveToLocalStorage } from "./localService";

export default class TodoService {
   todoArray = [] ;

      addTodo =(toDo) =>  {
        const newToDos = [...this.todoArray , toDo];
        saveToLocalStorage(newToDos) ;
    }

    deleteToDo =(id) => {
      debugger ;
      this.todoArray = getLocalStorageSData() ;
 const newtoDoList = this.todoArray.filter((obj) => obj.name !== id)  ;
 saveToLocalStorage(newtoDoList);
 return newtoDoList
    }
}