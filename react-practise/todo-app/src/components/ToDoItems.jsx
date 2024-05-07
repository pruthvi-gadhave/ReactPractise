import ToDoItem from "./ToDoItem";

const ToDoItems = ({todoList ,handleDeleteToDo ,handleEditToDo}) =>  {

    return (
        <>
        {   todoList?.map((item ) => (
                <ToDoItem  todoName={item} todoDate={item.dueDate} handleDeleteToDo={handleDeleteToDo} 
                handleEditToDo={handleEditToDo}/>
            ))
        }
        </>
    )
}

export default ToDoItems ;