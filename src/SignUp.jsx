import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function SignUp(props) {
    return (
        <div className='w-[90%] lg:w-[450px] 2xl:w-[450px] shadow-lg flex flex-col justify-center items-center gap-2 m-auto rounded-md'>
            <div className='w-full box-border  flex bg-gray-200 items-center justify-center text-xl font-bold p-2 rounded-md rounded-b-[0px]'>
                SIGN UP 
            </div>
            <div className='w-full 2xl:w-[450px] flex flex-col justify-center items-center p-4 gap-10 rounded-md'>
                <div className='w-full box-border  flex'>
                    <TextField id="standard-basic" label="User Name" variant="outlined" fullWidth/>
                </div>
                <div className=' w-full box-border  flex'>
                    <TextField id="standard-basic" label="Password" variant="outlined" fullWidth/>
                </div>
                <div className='w-full box-border flex'>
                    <TextField id="standard-basic" label="Retype Password" variant="outlined" fullWidth/>
                </div>
            </div>
            <Button startIcon={<HowToRegIcon/>} variant="contained" style={{width:"170px",marginBottom:"20px"}}>
                Register
            </Button>
        </div>
    );
}

export default SignUp;