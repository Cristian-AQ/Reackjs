import React, { useState } from 'react';
import Contador from './components/Contador'//importando archivo
import Lista from './components/Lista'
import Formulario from './components/Formulario'
import Saludo from './components/Saludo'
import Comentario from './components/Comentario'
import videoI from './img/isabel.mp4'
import imagenT from './img/Tohru2.jpg'
import imagenI from './img/Tohru1.jpg'
import UserTable from './components/UserTable';
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';
import Login from './components/Login';
import Index from './components/Index';

function App() {
  
  const sujeto = {
    nombre:'isabel',
    video: videoI,
    imagen1: imagenT,
    imagen2: imagenI,
    texto:'SADSDASDASASDASDSAFAFSAF'
  }
  const usersData = [
    { id:uuidv4(), name:'Tania', username: 'floppy'},
    { id:uuidv4(), name:'Craig', username: 'silicon'}
  ]

  const [users,setUsers] = useState(usersData)

  const addUser = (user) =>{
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  const deleteUser = (id) =>{
    setUsers(users.filter(user => user.id !== id))
  }

  const [editing,setEditing] = useState(false)
  const [currentUser,setCurrentUser] = useState({
    id:null, name:'', username:''
  })

  const editRow = (user) =>{
    setEditing(true);
    setCurrentUser({
      id:user.id, name:user.name, username:user.username
    })
  }

  const updateUser = (id,updateUser) =>{
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser:user)))
  }
  return (
    <Router>
      <div className="container mt-5">
        <Switch>
          <Route path='/formulario1'>
            <h1>CRUD APP</h1>
              <div className='flex-row'>
                <div className='flex-large'>
                  {
                    editing ? (
                      <div>
                        <h2>EDIT USER</h2>
                        <EditUserForm 
                          currentUser={currentUser}
                          updateUser={updateUser}
                          />
                      </div>
                    ) : (
                      <div>
                        <h2>ADD USER</h2>
                        <AddUserForm addUser={addUser} />
                      </div>
                    )
                  }
                </div>
                <div className='flex-large'>
                  <h2>VIEW USER</h2>
                  <UserTable 
                    users={users} 
                    deleteUser={deleteUser} 
                    editRow={editRow}/>
                </div>
              </div>
          </Route>
          <Route path='/contador'>
            <Contador />
          </Route>
          <Route path='/lista'>
            <Lista />
          </Route>
          <Route path='/formulario2'>
            <Formulario />
          </Route>
          <Route path='/saludo'>
            <Saludo persona='JUANITO' edad={25}/>
            <Saludo persona='JUANITO'/>
            <Saludo persona='IGNACIO'/>
          </Route>
          <Route path='/video'>
            <Comentario sujeto={sujeto} />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Index sujeto={sujeto}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;