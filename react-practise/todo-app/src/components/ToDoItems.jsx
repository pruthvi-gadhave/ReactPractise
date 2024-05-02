import ToDoItem from "./ToDoItem";

const ToDoItems = ({todoList}) =>  {
    console.log( "Props as " ,todoList );
    return (
        <>
        {
            todoList.map((item) => (
                <ToDoItem todoName={item.name} todoDate={item.dueDate} />
            ))

        }
        </>
    )
}

export default ToDoItems ;