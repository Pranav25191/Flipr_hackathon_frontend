import React, { useEffect } from 'react';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Overview from './Overview';
import Loader from "./Loader.jsx"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {link} from "./serverlink.js";
import axios from "axios"
import CompanyDetails from './CompanyDetails';
function NiftyBSE(props) {

    function valuetext(value) {
        return `${value}°C`;
    }
    const [company, setCompany] = React.useState('NSE');
    const [companyData, setCompanyData] = React.useState('');
    const [isLoading,setIsLoading]=React.useState(true);
    useEffect(()=>{
        axios.get(`http://10.196.15.138:4444/metadata/NSE`).then((response)=>{
            setCompanyData(response.data.result);
            setIsLoading(false);
        }).catch((err)=>{
            console.log(err);
            setIsLoading(false);

        });
    },[])
    const handleChange = async (event) => {
      setCompany(event.target.value);
      setIsLoading(true);
      try {
        let response=await axios.get(`http://10.196.15.138:4444/metadata/${event.target.value}`);
        console.log(response.data.result);
        setCompanyData(response.data.result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }

    };
    const navOptions=["Overview","Chart","Technicals","News","Contribution","Components","Forum"]
    return (
        <div className='w-full min-h-[500px] h-fit flex justify-center items-center flex-col gap-8'>
            {!isLoading && 
            <div className='w-full h-fit flex flex-col items-center justify-center mb-4'>
                <div className='w-[90%] lg:w-[90%] 2xl:w-[90%] flex border-4 h-[70px] justify-start items-center gap-10 divide-x p-2 box-border m-auto 2xl:p-2 border-l-0 border-r-0 overflow-x-auto'>
                    <div className='w-[200px] h-full border-gray-200 flex justify-center items-center text-md text-gray-400 '>
                        <Box sx={{ width: "450px"}}>
                            <FormControl fullWidth variant="filled">
                                <InputLabel id="demo-simple-select-filled-label">Company</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={company}
                                    label="Company"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"NSE"}>NIFTY 50</MenuItem>
                                    <MenuItem value={"BSE"}>BSE</MenuItem>
                                    <MenuItem value={"Reliance"}>Reliance</MenuItem>
                                    <MenuItem value={"Ashok Leyland"}>Ashok Leyland</MenuItem>
                                    <MenuItem value={"Cipla"}>Cipla</MenuItem>
                                    <MenuItem value={"Tata Steel"}>Tata Steel</MenuItem>
                                    <MenuItem value={"Eicher Motors"}>Eicher Motors</MenuItem>
                                    <MenuItem value={"Reliance"}>Reliance</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className='w-24 h-10  border-gray-200 flex justify-center items-center text-md text-gray-400 p-2'>
                        Future
                    </div>
                    <div className='w-24 h-10  border-gray-200 flex justify-center items-center text-md text-gray-400 p-2'>
                        Options
                    </div>
                </div>
                <div className='w-[90%] md:w-[90%] flex  h-fit flex-col justify-center items-center'>
                    <div className='w-full flex flex-col justify-center items-center h-fit box-border '>
                        <div className='w-full flex flex-col justify-center items-start h-10 box-border p-2'>
                            <p className='text-2xl font-bold'>{company}</p>
                        </div>
                        <div className='border-4 w-full'></div>
                        <div className='w-full h-fit flex flex-col  md:flex-row 2xl:flex-row '>
                            <div className='w-[40%] flex flex-col justify-start items-start h-fit box-border pt-10'>
                                <div className='w-fit flex flex-col gap-2 '>
                                    <p className='w-fit flex text-4xl font-extrabold'>{companyData.currClose}</p>
                                    {(companyData.currClose-companyData.prevClose)>=0 && <div className='w-fit flex text-xl  text-green-300 items-center justify-end'>
                                        <ChangeHistoryIcon color='green' fontSize='medium'/>
                                        <p className='w-fit flex text-2xl font-extrabold text-green-300'>
                                        {(companyData.currClose-companyData.prevClose).toFixed(2)}({((companyData.currClose-companyData.prevClose)/companyData.prevClose).toFixed(2)*100}%)
                                        </p>
                                    </div>}
                                    {(companyData.currClose-companyData.prevClose)<0 && <div className='w-fit flex text-xl  text-red-300 items-center justify-end'>
                                        <ChangeHistoryIcon color='green' fontSize='medium'/>
                                         <p className='w-fit flex text-2xl font-extrabold'>
                                        {(companyData.currClose-companyData.prevClose).toFixed(2)}({((companyData.currClose-companyData.prevClose)/companyData.prevClose).toFixed(2)*100}%)
                                        </p>

                                    </div>}
                                    <p className='w-fit flex text-md font-light text-gray-300'>As on Jan 13 2023</p>
                                </div>
                            </div>
                            <div className='w-[60%] flex flex-col pt-10 items-start h-[300px] '>
                                <div className='w-fit h-20 flex flex-col'>
                                    <p className='flex font-light text-lg text-gray-400'>Day Range</p>
                                    <Box sx={{ width: 300 }}>
                                        <Slider
                                        aria-label="Temperature"
                                        defaultValue={Number(companyData.currClose)}
                                        getAriaValueText={valuetext}
                                        valueLabelDisplay="auto"
                                        marks={[{label:`L`,value:companyData.dayLow},{label:`H`,value:companyData.dayHigh}]}
                                        min={companyData.dayLow}
                                        max={companyData.dayHigh}
                                        style={{color:"grey"}}
                                        />
                                    </Box>
                                </div>
                                <div className='w-fit h-20 flex flex-col'>
                                    <p className='flex font-light text-lg text-gray-400'>52 Week Range</p>
                                    <Box sx={{ width: 300 }}>
                                        <Slider
                                        aria-label="Temperature"
                                        defaultValue={Number(companyData.currClose)}
                                        getAriaValueText={valuetext}
                                        valueLabelDisplay="auto"
                                        marks={[{label:`L`,value:companyData['52WeekLow']},{label:`H`,value:companyData['52WeekHigh']}]}
                                        min={companyData['52WeekLow']}
                                        max={companyData['52WeekHigh']}
                                        style={{color:"grey"}}
                                        />
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[90%] 2xl:w-[90%] flex border-4 h-fit justify-start items-center gap-10 divide-x p-2 box-border m-auto 2xl:p-2 border-l-0 border-r-0 overflow-x-auto'>
                    {navOptions.map((option)=>{
                        return(
                            <div className='w-32 h-10  border-gray-200 flex justify-center items-center text-md text-gray-400 box-border p-2'>
                            {option}
                            </div>
                        )
                    })}    
                </div>
                <div className='w-[90%] 2xl:w-[90%]'>
                {
                    <Overview open={companyData.open} previousClose={companyData.prevClose} dayHigh={companyData.dayHigh} dayLow={companyData.dayLow} weekHigh={companyData['52WeekHigh']} weekLow={companyData['52WeekLow']} />
                }
                </div>
                
            </div>
        }
        {!isLoading && <CompanyDetails company={company}/>}
        {isLoading && <Loader/>}
        </div>

    );
}

export default NiftyBSE;