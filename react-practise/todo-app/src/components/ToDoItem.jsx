function ToDoItem( {todoName ,todoDate}) {

    // let item1 = 'Buy Milk' ;
    // let itemdate = ' 09/12/2021'
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
                <button className=" btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
    )
}

export default ToDoItem;