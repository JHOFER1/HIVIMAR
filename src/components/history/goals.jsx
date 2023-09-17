import React, { useState } from 'react'
import img from '../../assets/perfil.png'



function Awards() {
    const data = [
        { id: 1, Nombre: 'Happy Pets', fecha: '12/06/2023', costo: 524 },
        { id: 2, Nombre: 'Veterinaria Guayaquil', fecha: '12/06/2023', costo: 1967 },
        { id: 3, Nombre: 'Dr. Pet', fecha: '12/06/2023', costo: 435 },
        { id: 4, Nombre: 'Fauna Vet', fecha: '12/06/2023', costo: 158 },
        { id: 5, Nombre: 'Distribuidora Fefloc', fecha: '12/06/2023', costo: 124 },
        { id: 6, Nombre: 'Dr. Pet', fecha: '12/06/2023', costo: 342 },
    ];
    return (
        <div className=' font-primary mt-[10vh]'>

            <div className='flex items-center mx-4 w-full justify-center'>
                <img src={img} alt="" className='rounded-full h-[12vh] mx-4' />
                <h1 className='text-3xl font-semibold w-1/2 mx-4'>
                    Viviana Zambrano
                </h1>
            </div>
            <div className='flex justify-center w-full my-2'>
                <div
                    className='border-b-4 border-t-4 border-gray-300 py-4 w-[90vw]'>
                    <h1 className='text-center text-xl'>
                        RECOMPENSAS
                    </h1>
                </div>

            </div>
            <div className='flex justify-center'>
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th className='px-4 py-2 font-semibold'>
                                id
                            </th>
                            <th className='px-4 py-2 font-semibold'>
                                Fecha
                            </th>
                            <th className='px-4 py-2 font-semibold'>
                                Nombre
                            </th>
                            <th className='px-4 py-2 font-semibold'>
                                Costo
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}
                                className='text-center text-sm'>
                                <td className='py-2 px-2'>{item.id} </td>
                                <td className='py-2 px-2'>{item.fecha}</td>
                                <td className='py-2 px-2'>{item.Nombre}</td>
                                <td className='py-2 px-2'>{`${item.costo} $`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


        </div>
    )
}

export default Awards