import { useState } from "react"

function ToDoItem( {todoName ,handleDeleteToDo ,handleEditToDo }) {


    const [isEditClicked ,setisEditClicked] =useState(false) ;

    const handleDelete = (e) => {
        handleDeleteToDo(e.target.id)
    }

    const handleEdit =(e) => {debugger
            setisEditClicked(true) ;
            const toDoId  = e.target.id ;
           
            handleEditToDo(toDoId) 
    }
    return(
        <div className="container text-center p-2">
        <div className="row ">
            <div className="col-4">
               {todoName.name}
            </div>
            <div className="col-4">
               {todoName.dueDate}
            </div>
            <div className="col-4">
                <button id={todoName.id} className=" btn btn-danger" onClick={handleDelete}>Delete</button>
                <button id={todoName.id} className=" btn btn-primary ms-2" onClick={handleEdit}>Edit</button>
            </div>
        </div>
    </div>
    )
}

export default ToDoItem;