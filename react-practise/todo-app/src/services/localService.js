export const saveToLocalStorage = (toDoList) => {
    const data = JSON.stringify(toDoList)
    localStorage.setItem( "data" ,data )

}
export const getLocalStorageSData = () => {

    const storedUserData = localStorage.getItem('data') ;

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      return userData ;
    } else {
      console.log('User data not found in local storage')
    }

}