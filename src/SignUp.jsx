import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Link } from 'react-router-dom';
import axios from "axios";
import {link} from "./components/serverlink.js";
import Loader from './components/Loader';
function SignUp(props) {
    const [userName,setUserName]=React.useState('');
    const [password,setPassword]=React.useState('');
    const [retypepassword,setRetypePassword]=React.useState('');
    const [isLoading,setIsLoading]=React.useState(false);
    const handleUserName=(e)=>{
        setUserName(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleRetypePassword=(e)=>{
        setRetypePassword(e.target.value);
    }
    const handleSubmit=async ()=>{
        if(userName==='' ){
            alert("UserName Cannot be Empty");
            return;
        }
        if(retypepassword!==password){
            alert("Password and retype password should match");
            return;
        }
        if(password===' '){
            alert("Password cannot be empty");
            return;
        }
        try {
            setIsLoading(true);
            let response=await axios.post(`${link}/register`,{username:userName,password:password});
            console.log(response);
            alert("User Succesfully Created!");
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
            {!isLoading && <div className='w-[90%] lg:w-[450px] 2xl:w-[400px] shadow-lg flex flex-col justify-center items-center gap-2 rounded-md'>
                <div className='w-full box-border  flex bg-gray-200 items-center justify-center text-xl font-bold p-2 rounded-md rounded-b-[0px]'>
                    SIGN UP 
                </div>
                <div className='w-full 2xl:w-[400px] flex flex-col justify-center items-center p-4 gap-10 rounded-md'>
                    <div className='w-full box-border  flex'>
                        <TextField id="standard-basic" label="User Name" variant="outlined" fullWidth value={userName} onChange={handleUserName}/>
                    </div>
                    <div className=' w-full box-border  flex'>
                        <TextField id="standard-basic" label="Password" variant="outlined" fullWidth value={password} onChange={handlePassword} type="password"/>
                    </div>
                    <div className='w-full box-border flex'>
                        <TextField id="standard-basic" label="Retype Password" variant="outlined" fullWidth value={retypepassword} onChange={handleRetypePassword}/>
                    </div>
                </div>
                <Button startIcon={<HowToRegIcon/>} variant="contained" style={{width:"170px",marginBottom:"20px"}} onClick={handleSubmit}>
                    Register
                </Button>
                <div className='w-full flex h-10 items-center justify-center  text-blue-500'>
                    <Link to="/login"><u>Already Have an Account? Login Here!</u></Link>
                </div>
            </div>}
        </div>

    );
}

export default SignUp;