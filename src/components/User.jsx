const User = ({user , setUser, deleteUser}) => {
    const { id, email, password, first_name, last_name, birthday  } = user
  
    const handlerDelete = () => {
      const respuesta = confirm('Do you want to delete this friend?')
  
      if(respuesta) {
        deleteUser(id)
      }
    }
  
    return (
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase"> Name: {" "}
              <span className="font-normal normal-case">{first_name}</span>
            </p>
  
            <p className="font-bold mb-3 text-gray-700 uppercase"> Last Name: {" "}
              <span className="font-normal normal-case">{last_name}</span>
            </p>
  
            <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {" "}
              <span className="font-normal normal-case">{email}</span>
            </p>
  
            <p className="font-bold mb-3 text-gray-700 uppercase"> Birthday: {" "}
              <span className="font-normal normal-case"> {birthday}</span>
            </p>
  
            
  
            <div className="flex justify-between mt-10">
              <button 
                type="button" 
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg" 
                onClick={() => setUser(user)} 
                >Edit</button>
              
              <button 
                type="button" 
                className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
                onClick={handlerDelete} >Delete</button>
            </div>
          </div>
    )
  }
  
  export default User