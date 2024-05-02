import ToDoItem from "./ToDoItem";

const ToDoItems = ({todoList ,handleDeleteToDo}) =>  {
    console.log( "Props as " ,todoList );
    return (
        <>
        {
            todoList.map((item) => (
                <ToDoItem todoName={item.name} todoDate={item.dueDate} handleDeleteToDo={handleDeleteToDo}/>
            ))

        }
        </>
    )
}

export default ToDoItems ;