import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {pacientes && pacientes.length  ? (
          <>
            <h2 className="font-black text-center text-3xl ">List of friends 😀</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              See all  {' '}
              <span className="text-indigo-600 font-bold">your friends </span>
            </p>
    
            {pacientes.map(paciente => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente = {setPaciente}
                eliminarPaciente = {eliminarPaciente}
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

export default ListadoPacientes