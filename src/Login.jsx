import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import axios from "axios";
import {link} from "./components/serverlink.js";
import Loader from './components/Loader';
import { useNavigate  } from "react-router-dom";
function Login(props) {
    const navigate=useNavigate ();
    const [userName,setUserName]=React.useState('');
    const [password,setPassword]=React.useState('');
    const [isLoading,setIsLoading]=React.useState(false);
    const handleUserName=(e)=>{
        setUserName(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit=async ()=>{
        if(userName==='' ){
            alert("UserName Cannot be Empty");
            return;
        }
        if(password===' '){
            alert("Password cannot be empty");
            return;
        }
        try {
            setIsLoading(true);
            let response=await axios.post(`${link}/login`,{username:userName,password:password});
            console.log(response);
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("username",response.data.username);
            alert("User Succesfully LoggedIn!");
            navigate('/');
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            alert(error);
            setIsLoading(false);
        }
    }
    return (
        <div className='w-full h-fit flex items-center justify-center'>
            {isLoading && <Loader/>}
            {!isLoading && <div className='w-[90%] lg:w-[400px] 2xl:w-[450px] shadow-lg flex flex-col justify-center items-center gap-2 m-auto rounded-md'>
                <div className='w-full box-border  flex bg-gray-200 items-center justify-center text-xl font-bold p-2 rounded-md rounded-b-[0px]'>
                    LOGIN 
                </div>
                <div className='w-full 2xl:w-[450px] flex flex-col justify-center items-center p-4 gap-10 rounded-md'>
                    <div className='w-full box-border  flex'>
                        <TextField id="standard-basic" label="User Name" variant="outlined" fullWidth value={userName} onChange={handleUserName}/>
                    </div>
                    <div className=' w-full box-border  flex'>
                        <TextField id="standard-basic" label="Password" variant="outlined" fullWidth value={password} onChange={handlePassword}/>
                    </div>
                </div>
                <Button startIcon={<LoginIcon/>} variant="contained" style={{width:"170px",marginBottom:"20px"}} onClick={handleSubmit}>
                    Login
                </Button>
                <div className='w-full flex h-10 items-center justify-center  text-blue-500'>
                    <Link to="/signup"><u>New User? Register Here!</u></Link>
                </div>
            </div>}
        </div>
    );
}

export default Login ;