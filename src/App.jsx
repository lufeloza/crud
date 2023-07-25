import './App.css'
// import ToDoForm from './components/ToDoForm';
// import ToDoList from './components/ToDoList';
import UsersForm from './components/UsersFrom';
import UsersList from './components/UsersList';
import { useState, useEffect } from 'react';
import axios from 'axios'
 
function App() {
  const [usersList, setUsersList]= useState([])
  const [userSelected, setUserSelected] = useState(null)

  const getAllUser = () =>{
    axios
        .get('https://users-crud.academlo.tech/users/')
        .then(res => setUsersList(res.data))
        .catch(error =>console.error(error))
  }

  useEffect (() =>{

      getAllUser()

  }, [])

  const addUser = newUser => {
   
    axios
    .post('https://users-crud.academlo.tech/users/', newUser)
    .then(()=>{
      getAllUser()
      // para que el formulario se limpie
    })
    .catch(error=> console.error(error))
  }

  const deleteUser = id =>{
    /*
    axios.delete('url/${parametro}')
    
    */
   axios
        .delete(`https://users-crud.academlo.tech/users/${id}/`)
        .then(() => getAllUser())
        .catch(error => console.error(error))

  }

  const selectUser = users =>{
    setUserSelected(users)
  }
  const editUser = users => {
    /*
    axios.put('url/${id}', body)
    */
    axios
      .put (`https://users-crud.academlo.tech/users/${users.id}/`, users)
      .then(()=> {
        getAllUser()
        setUserSelected(null)
      } )
      .catch(error => console.error(error))
    
  }
  
  return (
    <main >
      <div>
      <UsersForm
      addUser ={addUser}
      userSelected={userSelected}
      editUser ={editUser}
      /> 
      </div>
      <div className='container'>
        <UsersList
        usersList ={usersList}
        deleteUser={deleteUser}
        selectUser={selectUser}
        />
      </div>
      
    </main>
  );
}
export default App;