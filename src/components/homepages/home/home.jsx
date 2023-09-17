import React, { useState } from "react"
import { Logout } from "./logout";
import { useNavigate } from "react-router-dom";

import mechanic from '../../../assets/mechanic.png'
import opcion1 from '../../../assets/opcion1.png'
import opcion2 from '../../../assets/opcion2.png'
import opcion3 from '../../../assets/opcion3.png'
import producto from '../../../assets/producto.png'
import producto1 from '../../../assets/producto1.png'

function Home() {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const navigate = useNavigate();
    const handleSearchSubmit = async (searchResults) => {
    };

    const handleOpen = () => {
        setSideBarOpen(!sideBarOpen)
        // console.log(sideBarOpen)
    }

    const handleClose = () => {
        setSideBarOpen(false)
        // console.log(sideBarOpen)
    }
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
        <div className="font-primary mt-[8vh] flex flex-col">
            <div className="w-full flex flex-col h-[57vh] rounded-md"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,0.8)), url(${mechanic})`,
                    backgroundSize: 'cover',

                }}>
                <div className="mt-[30vh] text-textPrimary">
                    <h1 className="text-center text-md font-semibold">
                        Bienvenido a nuestro plan de beneficios
                    </h1>
                    <h1 className="text-center font-bold text-4xl mx-2">
                        ACUMULA PUNTOS Y GANA PREMIOS
                    </h1>
                </div>

                <div className="flex flex-row justify-center my-4">
                    <img src={opcion1} onClick={() => handleClickRoute('1')} alt="op1" className="w-1/4 bg-primary rounded-full py-3 px-3 mx-3 hover:cursor-pointer" />
                    <img src={opcion2} onClick={() => handleClickRoute('2')} alt="op2" className="w-1/4 bg-primary rounded-full py-3 px-3 mx-3 hover:cursor-pointer" />
                    <img src={opcion3} onClick={() => handleClickRoute('3')} alt="op3" className="w-1/4 bg-primary rounded-full py-3 px-3 mx-3 hover:cursor-pointer" />
                </div>

                <div className="flex justify-center w-full ">
                    <img src={producto} alt="" className="w-[47vw] mx-1 rounded-lg" />
                    <img src={producto1} alt="" className="w-[47vw] mx-1 rounded-lg" />
                </div>

            </div>
            <Logout />
        </div>
    )
}
export default Home;