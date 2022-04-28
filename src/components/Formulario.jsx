import {useState, useEffect} from 'react'
// import { useForm } from 'react-hook-form';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente ,setPaciente}) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(paciente).length > 0){
      setName(paciente.name)
      setLastname(paciente.lastname)
      setEmail(paciente.email)
      setPassword(paciente.password)
      setBirthday(paciente.birthday)

    }
  }, [paciente])

  const generarId = ()=> {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = e => {
    e.preventDefault();
  
    // Validación del formulario
    if ([name, lastname, email, password,  birthday].includes('')) {
      console.log('Hay al menos un campo vacío')

      setError(true)
      return;
    } 

    setError(false)

    // Objeto de paciente 
    const objetoPaciente = {
      name,
      lastname,
      email,
      password,
      birthday
    }

    if(paciente.id){

     objetoPaciente.id = paciente.id 
     const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

     setPacientes(pacientesActualizados)
     setPaciente({})

    }else{

      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);

    }

    // Reiniciar el form
    setName('')
    setLastname('')
    setEmail('')
    setPassword('')
    setBirthday('')


  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">List of friends</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Add to your friends and {''}
            <span className="text-indigo-600 font-bold ">remeber them forever</span>
        </p>

        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
          >
          {error && <Error> <p>All fields are required</p> </Error> }
          <div className="mb-5">
            <label htmlFor="name" className="block text-gray-700 uppercase font-bold">
              Name
              </label>
              <input
                id="name"
                type='text' 
                placeholder='Name'
                className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'
                value={name}
                onChange={(e)=>setName(e.target.value)}           
              />
          </div>

          <div className="mb-5">
            <label htmlFor="lastname" className="block text-gray-700 uppercase font-bold">
              Last Name
              </label>
              <input
                id="lastname"
                type='text' 
                placeholder='Last Name'
                className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'
                value={lastname}
                onChange={(e)=>setLastname(e.target.value)}           
              />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
              </label>
              <input
                id="email"
                type='email' 
                placeholder='Email'
                className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}           
              />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-700 uppercase font-bold">
              Password
              </label>
              <input
                id="password"
                type='password' 
                placeholder='Password'
                className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}           
              />
          </div>

          <div className="mb-5">
            <label htmlFor="birthday" className="block text-gray-700 uppercase font-bold">
              Birthday
              </label>
              <input
                id="birthday"
                type='date' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'
                value={birthday}
                onChange={(e)=>setBirthday(e.target.value)}           
              />
          </div>


          <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value={paciente.id ? 'End edit' : "Add"}
          />

            
        </form>
    </div>
  
  )
}

export default Formulario