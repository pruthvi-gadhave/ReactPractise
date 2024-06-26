import { useEffect, useState } from "react";
import { generateUniqueId } from "../helpers/Helper";
import "./ToDoForm.css"

function ToDoForm({ handleAddTodo ,updateToDo ,isEditClicked  ,editedToDo   }) {

    const initialToDo = {
        id : "" ,
        name: "",
        dueDate: new Date().toISOString().substr(0, 10),
    }

    const [toDoName, setToDoName] = useState(initialToDo);


    useEffect( () => {
        if(isEditClicked && editedToDo){
            setToDoName(editedToDo) ;
        }else{
            setToDoName(initialToDo) ;
        }
        debugger ;
    } ,[isEditClicked ,editedToDo])

    const handleToDoName = (e) => {
        const toDoName = e.target.value;

        const { name, value } = e.target;
      
       setToDoName( (prevState) => ({
        ...prevState,
        [name] :value 
       }));
    }
    const handleAdd = (e) => {
        e.preventDefault();
        const newTodo = ({
            id : generateUniqueId() ,
            name: toDoName.name,
            dueDate: toDoName.dueDate
        });
        console.log("newTodo After added ", newTodo);
        handleAddTodo(newTodo) ;
        setToDoName(initialToDo)
    }

   function  handleUpdate(e){
    console.log(e.target.id);
    debugger  
    const newTodo = ({
        id : toDoName.id ,
        name: toDoName.name,
        dueDate: toDoName.dueDate
    });
    console.log("newTodo After added ", newTodo);
    updateToDo(newTodo) ;
    setToDoName(initialToDo)
    }
    

    return (
        <div>
            <div className="container todo-form-container text-center border p-2">
              <form className="">
            
                    <div className="col-12 my-2">
                        <label className="me-2">To Do Name</label>
                        <input type="text" placeholder="Enter ToDo Here" name="name" value={toDoName.name} onChange={handleToDoName}  />
                    </div>
                    <div className="col-12 my-2 ">
                    <label className="me-2 float-lg-start">Date </label>
                        <input type="date" value={toDoName.dueDate} name="dueDate" onChange={handleToDoName}></input>
                    </div>
                    <div className="col-12 my-2 text-lg-start ">
                       {
                        (!isEditClicked ? (
                            <button type="button" className=" btn btn-success px-4 " onClick={handleAdd}>Add</button>
                        ) :
                        (
                               <button type="button" className=" btn btn-success px-4 " onClick={handleUpdate}>Update</button>
                           
                        )
                        )
                       }
                    </div>
              
              </form>
            </div>

            {/* items List  */}


        </div>
    )
}

export default ToDoForm;