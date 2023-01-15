import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Tooltip } from '@mui/material';
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import {link} from "./components/serverlink.js";

function Navbar(props) {
    const navigate=useNavigate();
    const handleLogOut=async ()=>{
        try {
            let response=await axios.put(`${link}/logout`,{},{
                withCredentials: false,
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Credentials": true,
                  "Authorization":`Bearer ${localStorage.getItem("token")}`,
                },
              });
            console.log(response);
            // localStorage.removeItem("token");
            // localStorage.removeItem("username");
            alert("User Succesfully LoggedOut!");
            navigate('/login');
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }
    return (
        <div className='w-full h-[50px] flex justify-center items-center bg-gray-100 text-black text-xl font-extrabold shadow-md 2xl:text-xl p-2'>
            <p className='w-[60%] text-sm md:text-sm 2xl:text-2xl'>Stock Price Indicator</p>
            <div className='w-fit flex justify-center items-center ml-auto gap-4'>
                {localStorage.getItem("token") && <Button variant='contained' onClick={handleLogOut} fontSize='small' style={{height:"30px",background:"black"}}>LogOut</Button>}
                <Tooltip title={`User Name : ${localStorage.getItem("username")}`}>
                    <AccountCircleIcon fontSize='large' />
                </Tooltip>
            </div>
        </div>
    );
}

export default Navbar;