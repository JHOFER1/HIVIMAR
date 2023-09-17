import { React, useState } from 'react'
import { AiOutlineGoogle, AiFillApple } from 'react-icons/ai'
import { useAuthContext } from '../../../context/authContex'
//imgPREAPI
import logo from '../../../assets/logo.png'

export const Form = () => {
  const { login, setAuthToken, setUserId } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Correo:', email);
    console.log('Contraseña:', password);
    login('client')
  };


  return (
    <div className='font-primary flex flex-col items-center'>
      <div className='mt-16 mb-14'>
        <img src={logo} alt="" className='rounded-md object-cover  max-w-[50vw] max-h-[25vh]' />
      </div>
      <div className='max-w-[90vw] max-h-[40vh] border border-gray-300 rounded-3xl py-12 px-9'>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 text-center">
              Usuario
            </label>
            <div className='flex flex-row'>

              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="border border-primary rounded-full py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              // required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 text-center">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="border border-primary rounded-full py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            // required
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-primary w-full py-2 px-3 rounded-full text-white mb-2"
            >
              Iniciar sesión
            </button>


          </div>
        </form>
        <button

          className="bg-gray-100 border border-primary  w-full py-2 px-3 rounded-full text-black"
        >
          Olvide mi contraseña
        </button>
      </div>
    </div>
  )
}

