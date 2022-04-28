import { useForm } from "react-hook-form";


const Form = ({onCreate, setUser, user, setUsers, users}) => {

    const { register, handleSubmit, formState: { errors }  } = useForm()

    const onSubmit = (res) => {
        console.log(res)
        onCreate(res)
    }
    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">List of friends</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Add to your friends and {''}
                <span className="text-indigo-600 font-bold ">remeber them forever</span>
            </p>

            <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
            {errors && <Error> <p>All fields are required</p> </Error> }
            <div className="mb-5">
                <label htmlFor="name" className="block text-gray-700 uppercase font-bold">
                Name
                </label>
                <input
                    id="name" {...register('first_name')}
                    placeholder='Name'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'          
                />
            </div>

            <div className="mb-5">
                <label htmlFor="lastname" className="block text-gray-700 uppercase font-bold">
                Last Name
                </label>
                <input
                    id="lastname" {...register('last_name')}
                    placeholder='Last Name'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'     
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                Email
                </label>
                <input
                    id="email" {...register('email')}
                    type='email' 
                    placeholder='Email'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'         
                />
            </div>

            <div className="mb-5">
                <label htmlFor="password" className="block text-gray-700 uppercase font-bold">
                Password
                </label>
                <input
                    id="password" {...register('password')}
                    type='password' 
                    placeholder='Password'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'          
                />
            </div>

            <div className="mb-5">
                <label htmlFor="birthday" className="block text-gray-700 uppercase font-bold">
                Birthday
                </label>
                <input
                    id="birthday" {...register('birthday')}
                    type='date' 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'       
                />
            </div>


            <input 
            type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
            value={true ? 'End edit' : "Add"}
            />

                
            </form>
        </div>
    )
}

export default Form
