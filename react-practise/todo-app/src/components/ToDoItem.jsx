function ToDoItem( {todoName ,todoDate ,handleDeleteToDo}) {
console.log(handleDeleteToDo);
    // let item1 = 'Buy Milk' ;
    // let itemdate = ' 09/12/2021'
    const handleDelete = (e) => {
        handleDeleteToDo(e.target.id)
    }
    return(
        <div class="container text-center p-2">
        <div class="row ">
            <div class="col-4">
               {todoName}
            </div>
            <div class="col-4">
               {todoDate}
            </div>
            <div class="col-4">
                <button id={todoName} className=" btn btn-danger" onClick={handleDelete} >Delete</button>
            </div>
        </div>
    </div>
    )
}

export default ToDoItem;