import React from "react";
import { Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import {AiOutlineLogout} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const MainLayout = () => {

    const navigate = useNavigate();

    const handleClick = () =>{
        localStorage.clear()
        navigate('/')
    }
    return<div className='bluelight-bg h-100 d-flex flex-column justify-content-between align-items-center'>
        <div className="align-self-end">
            <Button className="bg-white clr-blue mt-5 mr-5" onClick={handleClick}>Logout <AiOutlineLogout/></Button>
        </div>
    <div className='bg-light min-width-50 min-height-50 rounded p-4'>
        <div className="mainContent">
            <Outlet/>
        </div>
    </div>
        <div></div>
    </div>
}

export default MainLayout