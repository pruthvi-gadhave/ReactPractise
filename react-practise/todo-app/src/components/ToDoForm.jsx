import { useState } from "react";

function ToDoForm({ handleAddTodo }) {

    const initialToDo = {
        name: "",
        dueDate: new Date().toISOString().substr(0, 10),
    }

    const [toDoName, setToDoName] = useState(initialToDo);

    const handleToDoName = (e) => {
        const toDoName = e.target.value;

        const { name, value } = e.target;
      
       setToDoName( (prevState) => ({
        ...prevState,
        [name] :value 
       }))

        console.log(toDoName);
    }
    const handleAdd = (e) => {
        e.preventDefault();
        const newTodo = ({
            name: toDoName.name,
            dueDate: toDoName.dueDate
        });
        console.log("newTodo After added ", newTodo);
        handleAddTodo(newTodo) ;
        setToDoName(initialToDo)
    }



    return (
        <div>

            <div class="container text-center">
                <div className="row ">
                    <div className="col-4">
                        <input type="text" placeholder="Enter ToDo Here" name="name" value={toDoName.name} onChange={handleToDoName} />
                    </div>
                    <div className="col-4">
                        <input type="date" value={toDoName.dueDate} name="dueDate" onChange={handleToDoName}></input>
                    </div>
                    <div className="col-4">
                        <button type="button" className=" btn btn-success px-4 " onClick={handleAdd}>Add</button>
                    </div>
                </div>
            </div>

            {/* items List  */}


        </div>
    )
}

export default ToDoForm;