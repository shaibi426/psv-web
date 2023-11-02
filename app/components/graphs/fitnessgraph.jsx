"use client"
require('dotenv').config()
import React, { PureComponent ,useState,useEffect} from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import axios from 'axios';


const COLORS = [  '#00C49F','#AF7AC5','#FFBE28', '#FF8042','#0088FE'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN); return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
    
  );
};



const custumizedLegend =(x,y)=>{
  return(
    <div className='flex flex-row  justify-center p-1 '>
      <div className='px-1 bg-[#00C49F] text-white rouded-sm text-xs  font-semibold'> Valid:{x}</div>
      <div className='px-1 bg-[#AF7AC5] text-white rouded-sm text-xs  font-semibold'>Expired:{y}</div>
    </div>
  )
}

  export default function FitnessGrph(){
  
    const [expired,setExpired]=useState(3)
    const [valid,setvalid]=useState(10)
  
    const data = [
      { name: 'Valid', value: valid },
      { name: 'Expired', value: expired },
    
    ];
  
    const getExpiredLicience = async () => {

      // axios.get('http://cpo.nhmp.gov.pk:7077/web/graph/fitnessExpiry').then(
        axios.get('http://203.99.61.134:7077/web/graph/fitnessExpiry').then(
        response =>{
          const result = response.data
       if (result){
         setvalid(result[0]['total'])
         setExpired(result[1]['total'])
        }
  
        }
      )
    } 
useEffect(()=>{

  getExpiredLicience()

},[])
  
    return(
      <div className="graph-div">
              {/* ======================fitness Graph */}
              <div className=" graph-body"> 
              <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
        <Legend verticalAlign="top" height={30} content={custumizedLegend(valid,expired)} />
        
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"         
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
       
      </ResponsiveContainer>
              </div>
         
              <div className="graph-footer ">
                Fitness Certificates
                <span className='footer-value'>
                 {valid+expired}
                 </span>
                 </div>
            </div>
       
    )
  }