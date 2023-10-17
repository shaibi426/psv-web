import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import img from '../../../../public/motorway.jpg'
  
  const motorways = [
    {
     "Motorways": "M-1 ",
     "Connected Cities": "Islamad to Peshawar",
     "Length": "154 km",
     "Operational Date": "01/10/2007"
    },
    {
     "Motorways": "M-2 ",
     "Connected Cities": "Lahore to Islamabad",
     "Length": "365  km",
     "Operational Date": "26/11/1997"
    },
    {
     "Motorways": "M-3 ",
     "Connected Cities": " Lahore to Abdul Hakeem",
     "Length": "229  km",
     "Operational Date": "01/04/2019"
    },
    {
     "Motorways": "M-4 ",
     "Connected Cities": "Pindi Bhattian to Multan",
     "Length": "290 Km",
     "Operational Date": "02/10/2003"
    },
    {
     "Motorways": "M-5 ",
     "Connected Cities": " Multan to Sukkhar",
     "Length": "386 km",
     "Operational Date": "06/11/2019"
    },
    {
     "Motorways": "M-9",
     "Connected Cities": " Hyderabad to Karachi",
     "Length": "136 Km",
     "Operational Date": "03/02/2017"
    },
    {
     "Motorways": "M-11 (LSM)",
     "Connected Cities": " Kala shah kaku to Sambrial",
     "Length": "91  km",
     "Operational Date": "27/09/2021"
    },
    {
     "Motorways": "M-14",
     "Connected Cities": " Hakla to Dera Islamil Khan",
     "Length": "285  km",
     "Operational Date": "05/01/2022"
    },
    {
      "Motorways": "E-35",
      "Connected Cities": "Burhan to Thakot",
      "Length": "174 km",
      "Operational Date": "05/12/2017"
     },
     {
      "Motorways": "Swat Express Way",
      "Connected Cities": "Nowshera to Swat",
      "Length": "81 km",
      "Operational Date": "01/08/2020"
     },
     {
      "Motorways": "Lyari Express Way",
      "Connected Cities": "Karachi",
      "Length": "16 km",
      "Operational Date": "01/02/2008"
     },


  ]
  
  export default function Motorways() {
    return (
        <div className=' bg-cover h-screen-14 bg-opacity-40 flex flex-col justify-center items-center mt-10 '>
        <div className='flex justify-center text-4xl font-prompt font-extrabold bg-green-700 text-white border border-white p-3 w-5/6 rounded-md'>
        MOTORWAYS
    </div>
        <div className =' m-5 w-5/6 flex justify-center rounded-lg border-2 border-green-900 bg-gradient-radial bg-white bg-opacity-70 text-black  p-2'>
           
           
      <Table>
        {/* <TableCaption>List of all motorways</TableCaption> */}
        <TableHeader>
          <TableRow className="bg-gray-200 font-extrabold font-prompt text-md">
          <TableHead className='text-left'>Sr.No</TableHead>
            <TableHead className='text-left'>Motorways</TableHead>
            <TableHead className='text-left'>Connected Cities</TableHead>
            <TableHead className='text-left'>Length(km)</TableHead>
            <TableHead className='text-left' >Opertional Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {motorways.map((item,index) => (
            <TableRow key={index}>
              <TableCell className='text-left'>{index+1}</TableCell>
              <TableCell className='text-left'>{item.Motorways}</TableCell>
              <TableCell className='text-left'>{item['Connected Cities']}</TableCell>
              <TableCell className='text-left'>{item['Length']}</TableCell>
              <TableCell className='text-left'>{item['Operational Date']}</TableCell>
            </TableRow>
            
          ))}
          <TableRow className='bg-gray-200 font-extrabold font-prompt text-md'>
              <TableCell className='text-left text-bold' colSpan={3}> Total </TableCell>
              <TableCell className='text-left text-bold' colSpan={2}>2207 km</TableCell>
              
            </TableRow>
        </TableBody>
      </Table>
      </div>
      </div>
    )
  }
