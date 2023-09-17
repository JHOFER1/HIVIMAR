import React, { useState } from 'react'
import img from '../../assets/perfil.png'
import { SlLocationPin } from 'react-icons/sl'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineIdentification, HiOutlineCake } from 'react-icons/hi'
import { BiSolidEdit, BiStar } from 'react-icons/bi'
import { PiStarBold } from 'react-icons/pi'
import opcion1 from '../../assets/opcion1.png'
import opcion2 from '../../assets/opcion2.png'
import opcion3 from '../../assets/opcion3.png'
import { useNavigate } from "react-router-dom";





function Profile() {
    const navigate = useNavigate();

    const handleClickRoute = (index) => {

        switch (index) {
            case '1':
                navigate('/user/profile');
                break;

            case '2':
                navigate('/user/benefit');
                break;

            case '3':
                navigate('/user/referrals');
                break;
            default:
                break
        }

    }

    return (
        <div className='bg-primary font-primary mt-[10vh] text-gray-700'>
            <div className='w-full bg-white flex flex-col items-center '>

                <div className='flex items-center mx-4 w-full justify-center'>
                    <img src={img} alt="" className='rounded-full h-[12vh] mx-4' />
                    <h1 className='text-3xl font-semibold w-1/2 mx-4'>
                        Viviana Zambrano
                    </h1>
                </div>

                <div className='py-6 border-t-2 border-b-2 w-[90vw] my-4 mx-1'>
                    <h1 className='text-center'>fernando.palaguachij@gmail.com</h1>
                </div>

                <div className=''>
                    <div className='flex justify-start my-4'>
                        <SlLocationPin size={30} />
                        <h1 className='mx-4 mt-1 text-md'>
                            Urbanizaciones Rio Guayas Club
                            <br />
                            Condominio  Canarias
                            <br />
                            Apartamento 5
                        </h1>
                    </div>
                    <div className='flex justify-start my-4'>
                        <BsTelephone size={30} />
                        <h1 className='mx-4 mt-1 text-md'>
                            +593 9878571
                        </h1>
                    </div>

                    <div className='flex justify-start my-4'>
                        <HiOutlineIdentification size={30} />
                        <h1 className='mx-4 mt-1 text-md'>
                            0302641428
                        </h1>
                    </div>
                    <div className='flex justify-start my-4'>
                        <HiOutlineCake size={30} />
                        <h1 className='mx-4 mt-1 text-md'>
                            15-feb-1997
                        </h1>
                    </div>
                </div>

                <div className='w-full my-2 flex justify-end items-center'>
                    <BiSolidEdit size={35} />
                    <h1 className='text-sm mx-2'>
                        Editar datos
                    </h1>
                </div>
                <div className='flex justify-center bg-primary text-center text-white py-2 w-full items-center '>
                    <PiStarBold size={40} className='mr-10' />
                    Balance Puntos
                </div>

                <div>
                    <div className="flex flex-row justify-center my-4">
                        <img src={opcion1} onClick={() => handleClickRoute('1')} alt="op1" className="w-1/4 bg-primary rounded-full py-3 px-3 mx-3 hover:cursor-pointer" />
                        <img src={opcion2} onClick={() => handleClickRoute('2')} alt="op2" className="w-1/4 bg-primary rounded-full py-3 px-3 mx-3 hover:cursor-pointer" />
                        <img src={opcion3} onClick={() => handleClickRoute('3')} alt="op3" className="w-1/4 bg-primary rounded-full py-3 px-3 mx-3 hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile