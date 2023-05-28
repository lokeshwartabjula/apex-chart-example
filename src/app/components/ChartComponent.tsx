// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import React, { useState } from "react";
// // import Paper from "@material-ui/core/Paper";
// // import { withStyles } from "@material-ui/core/styles";
// // import Select from "@material-ui/core/Select";
// // import MenuItem from "@material-ui/core/MenuItem";

// import Chart from "react-apexcharts";


// // const styles = theme => ({
// //     root: {
// //       flexGrow: 5,
// //       maxWidth: 500,
// //       marginTop: "50px",
// //       margin: "auto"
// //     }
// //   });

// function ChartComponent() {

//     const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const options = ['Option 1', 'Option 2', 'Option 3']; 

//   const handleSelectOption = (option: string) => {
//     setSelectedOption(option);
//   };



//     const chartProps = {
//         type: "line",
//         options: {
//           chart: { id: "demo-chart" },
//           stroke: {
//             curve: "smooth",
//             width: 2,
//           },
//           markers: {
//             size: 2
//           },
//           xaxis: {
//             type: "category"
//           },
//           noData: {
//             text: "No Data"
//           }
//         },
//         series: []
//       };

//     const chartDataArray = [
//         {
//           name: "Demo-Chart",
//           data: [
//             {
//               x: "Venezuela",
//               y: "290"
//             },
//             {
//               x: "Saudi",
//               y: "260"
//             },
//             {
//               x: "Canada",
//               y: "180"
//             },
//             {
//               x: "Iran",
//               y: "140"
//             },
//             {
//               x: "Russia",
//               y: "115"
//             },
//             {
//               x: "UAE",
//               y: "100"
//             },
//             {
//               x: "US",
//               y: "30"
//             },
//             {
//               x: "China",
//               y: "30"
//             }
//           ]
//         }
//       ];
    
//     return(
//         <div>
//             <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">Chart Type</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={selectedOption || ''}
//                   label="Age"
//                   onChange={(e) => handleSelectOption(e.target.value)}
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//             </FormControl>
//             <Chart
//             key={selectedOption}
//             options={chartProps.options}
//             series={chartProps.series}
//             type={selectedOption}
//           />
//         </div>
//     );
// }
// export default ChartComponent;

"use client";
import React, { useState, useEffect } from 'react';
// import Chart from 'react-apexcharts';
import dynamic from 'next/dynamic';

import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const ChartComponent: React.FC = () => {
    const [chartType, setChartType] = useState('line');
    const [isClient, setIsClient] = useState(false);

    
  useEffect(() => {
    setIsClient(true);
  }, []);

  
  
    // Sample data
    // const chartOptions = {
    //   series: [
    //     {
    //       name: 'SKILL',
    //       data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    //     },
    //   ],
    //   options: {
    //     chart: {
    //       id: 'basic-chart',
    //     },
    //     xaxis: {
    //       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    //     },
    //   },
    // };

    const chartOptions = {
          
        series: [{
          name: 'Q3 2022',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Q4 2022',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Q3 2023',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
          chart: {
            // type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Artificial Intelligence', 'Machine Learning', 'Web Development', 'Data Analysis', 'Marketing', 'Content Creation', 'Project Managment', 'Social Media Marketing', 'Accounting'],
          },
          yaxis: {
            title: {
              text: 'No. of Jobs'
            }
          },
          fill: {
            opacity: 1
          }
        },
      
      
      };
  
    const handleChartTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setChartType(event.target.value as string);
    };

    if (!isClient) {
        return null; // Return null during SSR
      }
  
    return (
      <Stack spacing={2}>
       
        {/* {(typeof window !== 'undefined') && */}
        <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type='bar'
        //   type={chartType=='line'?'line': (chartType=='area'?'area':'bar') }
        //   key={chartType=='line'?'line': (chartType=='area'?'area':'bar') }
          height={400}
        />
    {/* } */}
      </Stack>
    );
  };
  
  export default ChartComponent;
  
