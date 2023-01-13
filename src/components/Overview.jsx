import React from 'react';
import Divider from '@mui/material/Divider';
function Overview(props) {
    return (
        <div className='w-full h-fit flex justify-between flex-col md:flex-row 2xl:flex-row'>
            <div className='w-full 2xl:w-[40%]  w-fuflex flex-col justify-center items-center '>
                <div className='w-full flex justify-between box-border p-2 border-b-2 border-dashed	'>
                    <p className='text-lg text-gray-400 font-light'>Open</p>
                    <p className='text-md text-black font-bold'>{props.open}</p>
                </div>
                <div className='w-full flex justify-between box-border p-2 border-b-2 border-dashed	'>
                    <p className='text-lg text-gray-400 font-light'>Previous Close</p>
                    <p className='text-md text-black font-bold'>{props.previousClose}</p>
                </div>
                <div className='w-full  flex justify-between box-border p-2 border-b-2 border-dashed	'>
                    <p className='text-lg text-gray-400 font-light'>Day High</p>
                    <p className='text-md text-black font-bold'>{props.dayHigh}</p>
                </div>
            </div>
            <div className='w-full 2xl:w-[40%]  flex flex-col justify-center items-center'>
                <div className='w-full flex justify-between box-border p-2 border-b-2 border-dashed	'>
                    <p className='text-lg text-gray-400 font-light'>Day Low</p>
                    <p className='text-md text-black font-bold'>{props.dayLow}</p>
                </div>
                <div className='w-full flex justify-between box-border p-2 border-b-2 border-dashed	'>
                    <p className='text-lg text-gray-400 font-light'>Week High</p>
                    <p className='text-md text-black font-bold'>{props.weekHigh}</p>
                </div>
                <div className='w-full  flex justify-between box-border p-2 border-b-2 border-dashed	'>
                    <p className='text-lg text-gray-400 font-light'>Week Low</p>
                    <p className='text-md text-black font-bold'>{props.weekLow}</p>
                </div>
            </div>
        </div>
    );
}

export default Overview;