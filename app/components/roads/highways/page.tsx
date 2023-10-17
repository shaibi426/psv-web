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
        "Motorways": "N-5 ",
        "Connected Cities": "Peshawar to Karachi",
        "Length": "1473 Km",
        "Operational Date": "2002"
       },
    
       {
        "Motorways": "N-10 ",
        "Connected Cities": "Gawader to Makola",
        "Length": "160 Km",
        "Operational Date": "Feb-2007"
       },
       {
        "Motorways": "N-25 (RCD)",
        "Connected Cities": "Hub to Uthal",
        "Length": "360 km",
        "Operational Date": "Jun-2008"
       },
       {
        "Motorways": "N-50",
        "Connected Cities": "Kuchlak to Muslim Bagh",
        "Length": "100 km",
        "Operational Date": "Mar-2022"
       },
       {
        "Motorways": "N-55",
        "Connected Cities": "jam Shoro to Rato Dero ",
        "Length": "328 km",
        "Operational Date": "Jan-2019"
       },
       {
        "Motorways": "N-75 (IMDC)",
        "Connected Cities": "islamabad to Muree",
        "Length": "41 km",
        "Operational Date": "Mar-2010"
       },
       {
        "Motorways": "LEBP",
        "Connected Cities": "Mehmood Booti to Kala shah Kaku ",
        "Length": "20 km",
        "Operational Date": "Sep-2021"
       }

  ]
  
  export default function Highways() {
    return (
        <div className=' bg-cover h-screen-14 bg-opacity-40 flex flex-col justify-center items-center mt-10 '>
        <div className='flex justify-center text-4xl font-prompt font-extrabold bg-blue-800 text-white border border-white p-3 w-5/6 rounded-md'>
        HIGHWAYS
    </div>
        <div className =' m-5 w-5/6 flex justify-center rounded-lg border-2 border-blue-800 bg-gradient-radial bg-white bg-opacity-70 text-black  p-2'>
           
           
      <Table>
        {/* <TableCaption>List of all motorways</TableCaption> */}
        <TableHeader>
          <TableRow className="bg-gray-200 font-extrabold font-prompt text-md">
          <TableHead className='text-left'>Sr.No</TableHead>
            <TableHead className='text-left'>Highways</TableHead>
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
              <TableCell className='text-left text-bold' colSpan={3}> Total</TableCell>
              <TableCell className='text-left text-bold' colSpan={2}>2482 km</TableCell>
              
            </TableRow>
        </TableBody>
      </Table>
      </div>
      </div>
    )
  }
