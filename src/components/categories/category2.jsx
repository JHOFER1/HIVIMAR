import React, { useState } from 'react'
import { LuGift } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import img from '../../assets/perfil.png'
import check from '../../assets/check.png'
import trofeo from '../../assets/trofeo.png'
import campeon from '../../assets/campeon.png'


function Refer() {
    const data = {
        total: '10',
        restantes: '10',
        ventas: '12',
        bonificaciones: '90'
    };

    return (
        <div className='bg-primary font-primary mt-[10vh] text-gray-700'>
            <div className='w-full bg-white flex flex-col items-center '>

                <div className='flex items-center mx-4 w-full justify-center'>
                    <img src={img} alt="" className='rounded-full h-[12vh] mx-4' />
                    <h1 className='text-3xl font-semibold w-1/2 mx-4'>
                        Viviana Zambrano
                    </h1>
                </div>

                <div className='border-2 w-[90vw] h-[50vh] mt-4 rounded-xl flex flex-col items-center'>

                    <div className='flex justify-center w-full'>
                        <div className='w-1/2 text-center bg-gray-300 rounded-b-none rounded-md'>
                            <h1 >
                                Nivel Actual
                            </h1>
                            <h1 className='text-2xl'>
                                Oro
                            </h1>
                        </div>

                        <div className='w-1/2 text-center text-white bg-primary rounded-b-none rounded-md'>
                            <h1 >
                                Nivel a alcanzar
                            </h1>
                            <h1 className='text-2xl'>
                                Platino
                            </h1>
                        </div>
                    </div>

                    <div className='grid grid-cols-2  border-b-2 w-[85vw]'>
                        <div className='flex justify-center items-center px-4 py-2'>
                            <h1 className='text-sm'>   Puntos para subir de Nivel</h1>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h1 className='text-2xl'> 610</h1>
                        </div>
                    </div>

                    <div className='grid grid-cols-2  border-b-2 w-[85vw]'>
                        <div className='flex justify-start px-4 my-2'>
                            <h1 className='text-sm'>Ventas</h1>
                        </div>
                        <div className='flex justify-center my-2'>
                            <h1 className=''> 3245</h1>
                        </div>

                        <div className='flex justify-start px-4 my-2'>
                            <h1 className='text-sm'>Bonificaciones</h1>
                        </div>
                        <div className='flex justify-center my-2'>
                            <h1 className=''> 90</h1>
                        </div>

                        <div className='flex justify-start px-4 my-2'>
                            <h1 className='text-sm'>Desafios</h1>
                        </div>
                        <div className='flex justify-center my-2'>
                            <h1 className=''> 610</h1>
                        </div>
                    </div>

                    <div className='grid grid-cols-2  border-b-2 w-[85vw]'>
                        <div className='flex justify-start px-4'>
                            <h1 className='text-md font-bold'>Total</h1>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h1 className='text-2xl'> 3390</h1>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-center my-2'>Mis insignias</h1>
                        <div className='flex justify-center'>
                            <div className='flex flex-col w-1/4 mx-2'>
                                <img src={check} alt="" className='' />
                                <h1 className='text-sm text-center'>
                                    SMARTV
                                </h1>
                            </div>
                            <div className='flex flex-col w-1/4 mx-2'>
                                <img src={trofeo} alt="" className='' />
                                <h1 className='text-sm text-center'>
                                    PREMIO 2
                                </h1>
                            </div>
                            <div className='flex flex-col w-1/4 mx-2'>
                                <img src={campeon} alt="" className='' />
                                <h1 className='text-sm text-center'>
                                    PREMIO 3
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>
                <Link to={'/user/history'}>
                    <div className='flex justify-center my-4 py-4 bg-gray-300 w-[90vw] rounded-md items-center relative'>
                        <h1 className='text-center '> Mis Premios</h1>
                        <div className='mx-4 absolute right-8 bg-primary p-3 rounded-full'>
                            <LuGift size={45} />
                        </div>
                    </div>
                </Link>
                <Link to={'/user/goalhistory'}>
                <div className='flex justify-center  py-4 w-[90vw] rounded-md items-center relative bg-primary'>
                    <h1 className='text-center text-white'>Ver mi Historial</h1>
                </div>
                </Link>
            </div>

        </div>
    )
}

export default Refer