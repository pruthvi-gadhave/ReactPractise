function ToDoForm() {
    return (
        <div>
          
            <div class="container text-center">
                <div class="row ">
                    <div class="col-4">
                       <input type="text" placeholder="Enter ToDo Here"/>
                    </div>
                    <div class="col-4">
                        <input type="date"></input>
                    </div>
                    <div class="col-4">
                        <button className=" btn btn-success px-4">Add</button>
                    </div>
                </div>
            </div>

          {/* items List  */}

        
        </div>
    )
}

export default ToDoForm;