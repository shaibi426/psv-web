"use client"
import { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE','#EB9002',];

export default function LicienceGraph(){
  const [expired,setExpired]=useState(200)
  const [valid,setvalid]=useState(500)

  const data = [
    { name: 'Valid', value: valid },
    { name: 'Expired', value: expired },
  
  ];

  const getExpiredLicience = async () => {
    const response = await fetch('api/checkLicience', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const validity = await response.json()
   setvalid(validity[0]['total'])
   setExpired(validity[1]['total'])

    
    
  } 

  useEffect(()=>{
    getExpiredLicience()
  })

return(
        <ResponsiveContainer>

        <PieChart width={400} height={400} >
        <Pie
          data={data}
        
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          >
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
        </Pie>
       
      </PieChart>
    </ResponsiveContainer>
    );
    
}