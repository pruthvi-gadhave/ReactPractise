function ToDoItem( {todoName ,todoDate ,handleDeleteToDo}) {


    const handleDelete = (e) => {
        handleDeleteToDo(e.target.id)
    }

    const handleEdit =(e) => {
        
    }
    return(
        <div className="container text-center p-2">
        <div className="row ">
            <div className="col-4">
               {todoName}
            </div>
            <div className="col-4">
               {todoDate}
            </div>
            <div className="col-4">
                <button id={todoName} className=" btn btn-danger" onClick={handleDelete}>Delete</button>
                <button id={todoName} className=" btn btn-primary ms-2" onClick={handleEdit}>Edit</button>
            </div>
        </div>
    </div>
    )
}

export default ToDoItem;