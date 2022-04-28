import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import ListUsers from "./components/ListUsers"
import createNewUser from "./services/createNewUser"
import getAllUsers from "./services/getAllUsers"
import deleteUser from "./services/deleteUser"



function App() {

  const [users, setUsers] = useState([]);
  const[user, setUser] = useState({});
  const [deleteId, setDeleteId] = useState('')

  useEffect(() => {
    getAllUsers()
      .then(response => {
        console.log(response.data)
        setUsers(response.data)
      })
  },[])

  useEffect(() => {
    if(user.first_name){
      createNewUser(user)
        .then((res) => {
          console.log(res.data)
          setUsers([...users, res.data])
          setUser({})
        })
    } else {
      console.log('no hay valores para hacer un post')
    }
  }, [user, users])

  useEffect(() => {
    if(deleteId){
      deleteUser(deleteId)
        .then((response) => {
          console.log(response)
        })
    } 
  }, [deleteId])



  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
        <Form
          users = {users}
          setUsers={setUsers}
          user = {user}
          setUser = {setUser}
        />
        <ListUsers
          users = {users}
          setUser={setUser}
          deleteUser = {deleteUser}
        />
      </div>
    </div>
  )
}

export default App
