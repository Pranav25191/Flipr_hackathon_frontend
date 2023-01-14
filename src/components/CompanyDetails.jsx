import React,{useEffect} from 'react';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
// import  {stockIndexData} from './stockIndexData';
import Loader from './Loader';
import axios from "axios";
function CompanyDetails(props) {
    // console.log(stockIndexData);
    const [isLoading,setIsLoading]=React.useState(true);
    const [stockIndexData,setStockIndexData]=React.useState([]);
    IgrFinancialChartModule.register();
    useEffect(()=>{
        axios.get(`http://10.196.15.138:4444/historicaldata/${props.company}`).then((response)=>{
            setStockIndexData(response.data.result);
            setIsLoading(false);
        }).catch((err)=>{
            console.log(err);
            setIsLoading(false);
        });
    },[])  
    return (
        <div className="w-full h-[500px] flex justify-center flex-col items-center mb-10 gap-10" >
            <p className='w-full flex justify-center text-2xl text-gray-400'>Company Stock Values</p>

            {!isLoading && <div className="w-[90%] h-full shadow-lg rounded-md" >
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Candle"
                    thickness={2}
                    chartTitle={`${props.company} stock Value`}
                    yAxisMode="PercentChange"
                    yAxisTitle="Percent Changed"
                    negativeOutlines="rgb(213, 94, 0)"
                    negativeBrushes="Transparent"
                    brushes="Transparent"
                    zoomSliderType="None"
                    indicatorTypes="ForceIndex" 
                    dataSource={stockIndexData}/>
            </div>}
            {isLoading && <Loader/>}
        </div>
    );
}

export default CompanyDetails;
// <Box sx={{ width: "90%" }}>
// <FormControl fullWidth>
//     <InputLabel id="demo-simple-select-label">Company</InputLabel>
//     <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         value={company}
//         label="Company"
//         onChange={handleChange}
//     >
//         <MenuItem value={10}>Ten</MenuItem>
//         <MenuItem value={20}>Twenty</MenuItem>
//         <MenuItem value={30}>Thirty</MenuItem>
//     </Select>
// </FormControl>
// </Box>