import { useState } from "react"
import "./ToDoItem.css"

function ToDoItem({ todoName, handleDeleteToDo, handleEditToDo }) {


    const [isEditClicked, setisEditClicked] = useState(false);

    const handleDelete = (e) => {
        handleDeleteToDo(e.target.id)
    }

    const handleEdit = (e) => {
        debugger
        setisEditClicked(true);
        const toDoId = e.target.id;

        handleEditToDo(toDoId)
    }
    return (

        <>

        {/* <div className="grid-container">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        </div> */}
        <div className="grid-container">          
         <div className="card-body p-4 border m-2 bg-body-secondary">
                <h5 className="card-title" >{todoName.dueDate}</h5>
                <p className="card-text">{todoName.name}</p>
                <div className="">
                    <button id={todoName.id} className=" btn btn-danger" onClick={handleDelete}>Delete</button>
                    <button id={todoName.id} className=" btn btn-primary ms-2" onClick={handleEdit}>Edit</button>
                </div>
            </div>

        </div>
 
        </>

    )
}

export default ToDoItem;