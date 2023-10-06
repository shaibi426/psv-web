"use client"
import React,{useState,useEffect} from "react"
import {  BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer,CartesianGrid,Tooltip,Legend, Label} from "recharts"
import axios from "axios"

export default function RoutGraph() {
  const [expired,setExpired]=useState(200)
  const [valid,setvalid]=useState(500)

  const data = [
    { name: 'Valid', value: valid },
    { name: 'Expired', value: expired },
  
  ];

  const getExpiredLicience = async () => {
   axios.get("http://localhost:5000/web/graph/routeExpiry").then(
    response=>{
        const validity = response.data
      setExpired(validity[0]['total'])
      setvalid(validity[1]['total']) 
    }
   )
   
  } 

  useEffect(()=>{
    getExpiredLicience()
  })

    const colors = ['#0088FE', 'purple', '#00C49F', '#FFBB28', '#FF8042', 'pink'];
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
      <div className="graph-div">
              {/* ==================================================Rout Graph */}
              <div className=" graph-body ">
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
              </div>
              <div className="graph-footer bg-gradient-to-t from-purple-100 to-purple-400">
                Total Routs
                <span className='footer-value'>
                {valid+expired}
                  </span>  
                  </div>
            </div>
      
      
    );}