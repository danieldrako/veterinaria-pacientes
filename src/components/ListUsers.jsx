import User from "./User"

const ListUsers = ({users, setUser, deleteUser}) => {
  return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {users && users.length  ? (
          <>
            <h2 className="font-black text-center text-3xl ">List of friends 😀</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              See all  {' '}
              <span className="text-indigo-600 font-bold">your friends </span>
            </p>
    
            {users.map(user => (
              <User
                key={user.id}
                user={user}
                setUser = {setUser}
                eliminarUser = {deleteUser}
              />
            ))}
          </>

        ) : (
          <>
            <h2 className="font-black text-center text-3xl ">No friends yet 😔</h2>
              <p className="text-xl mt-5 mb-10 text-center">
              Start adding friends {' '}
                <span className="text-indigo-600 font-bold">and they will appear in this place</span>
              </p>
          </>
        )}
      </div>
  )
}

export default ListUsers