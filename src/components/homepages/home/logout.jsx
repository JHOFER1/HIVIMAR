import React from 'react'
import { useAuthContext } from '../../../context/authContex'

export const Logout = () => {
    const { logout } = useAuthContext()
    const handelLogout = () => {
        logout();
    }

    return (
        <div className='fixed w-2/3 mt-10 '>
            <button
                className='w-2/4 p-1 flex items-center justify-center rounded-full bg-primary'
                onClick={handelLogout}>
                Logout
            </button>
        </div>
    )
}
