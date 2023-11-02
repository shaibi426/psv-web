"use client"
import React,{useState,useEffect} from "react"
import {  BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer,CartesianGrid,Tooltip,Legend, Label} from "recharts"
import axios from "axios"
const custumizedLegend =(x,y)=>{
  return(
    <div className='flex flex-row  justify-center p-1 '>
      <div className='px-1  bg-[#0088FE] text-white rouded-sm text-xs  font-semibold'> Valid:{x}</div>
      <div className='px-1  bg-[purple] text-white rouded-sm text-xs  font-semibold'>Expired:{y}</div>
    </div>
  )
}

export default function RoutGraph() {
  const [expired,setExpired]=useState(200)
  const [valid,setvalid]=useState(500)

  const data = [
    { name: 'Valid', value: valid ,percentage: `${(valid * 100/(valid+expired)).toFixed(0)}%` },
    { name: 'Expired', value: expired, percentage:`${(expired * 100/(valid+expired)).toFixed(0)}%`}
  
  ];

  const getExpiredLicience = async () => {
   axios.get("http://203.99.61.134:7077/web/graph/routeExpiry").then(
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
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <Legend verticalAlign="top" height={30} content={custumizedLegend(valid,expired)}/>
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="name" />
    
      <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top', dataKey : "percentage"}}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          
        ))}
      </Bar>
    </BarChart>
      </ResponsiveContainer>
              </div>
              <div className="graph-footer bg-gradient-to-t from-purple-100 to-purple-400">
               Total Route Permits 
                <span className='footer-value'>
                {valid+expired}
                  </span>  
                  </div>
            </div>
      
      
    );}