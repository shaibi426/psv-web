"use client"
import React, { PureComponent,useState,useEffect } from 'react';
import { LineChart,  AreaChart,Area,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function TrackinLineGraph(){
  const [data,setData]=useState()
  

  const getExpiredLicience = async () => {
    const response = await fetch('api/pointtracking', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
   setData(result)
  } 

  useEffect(()=>{
    getExpiredLicience()
  })

    return(
      <div className="bg-white w-5/6 h-60 rounded-lg m-4 shadow-md shadow-gray-600">
      {/* ============================================tracking Graph */}
      <div className=" graph-body">
      <ResponsiveContainer width="100%" height="100%">
     
        <AreaChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="Loctions" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" type="square" height={36}/>
          {/* <Area type="monotone" dataKey="vehicles" stroke="#8884d8" strokeWidth={3}  activeDot={{ r: 8 }} />
          <Area type="monotone" dataKey="location" stroke="#82ca9d" strokeWidth={3} /> */}
          <Area type="monotone" dataKey="PSVs" stackId="1" stroke="purple" fill="#8884d8" />
                <Area type="monotone" dataKey="Location" stackId="1" stroke="green" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
      <div className="graph-footer bg-gradient-to-t from-orange-100 to-orange-400 font-semibold">
        Location Wise Vehicle Checking
      </div>
    </div>
      
       
          );
    
}