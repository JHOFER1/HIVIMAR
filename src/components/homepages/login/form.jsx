import { React, useState } from 'react'
import { AiOutlineGoogle, AiFillApple } from 'react-icons/ai'
import { useAuthContext } from '../../../context/authContex'



//
export const Form = () => {
  const [selectedCountryName, setSelectedCountryName] = useState('');
  const [offer, setOffer] = useState('');
  const { login, setAuthToken, setUserId } = useAuthContext();

  const handleCountryChange = (countryName) => {
    setSelectedCountryName(countryName);
    // console.log(countryName)
  };

  const handleLogin = () => {
    login('client');
  }


  return (
    <div className='font-primary' >

      LOGIN

    </div>
  )
}

