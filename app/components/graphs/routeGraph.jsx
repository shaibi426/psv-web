"use client"
import React,{useState,useEffect} from "react"
import {  BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer,CartesianGrid,Tooltip,Legend} from "recharts"

export default function RoutGraph() {
  const [expired,setExpired]=useState(200)
  const [valid,setvalid]=useState(500)

  const data = [
    { name: 'Valid', value: valid },
    { name: 'Expired', value: expired },
  
  ];

  const getExpiredLicience = async () => {
    const response = await fetch('api/checkRoute', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const validity = await response.json()
    setExpired(validity[0]['total'])

   setvalid(validity[1]['total'])
  
    
    
  } 

  useEffect(()=>{
    getExpiredLicience()
  })

    const colors = ['#0088FE', 'red', '#00C49F', '#FFBB28', '#FF8042', 'pink'];
    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width /2},${y + height / 2}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
      <ResponsiveContainer width="100%" height="100%">
          <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      
      <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
      </ResponsiveContainer>
      
    );}