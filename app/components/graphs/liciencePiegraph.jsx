"use client"
import { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell,Legend,LabelList, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const COLORS = ['#0088FE','#EB9002',];

const custumizedLegend =(x,y)=>{
  return(
    <div className='flex flex-row  justify-center p-1 '>
      <div className='px-1  bg-[#0088FE] text-white rouded-sm text-xs  font-semibold'> Valid:{x}</div>
      <div className='px-1  bg-[#EB9002] text-white rouded-sm text-xs  font-semibold'>Expired:{y}</div>
    </div>
  )
}

export default function LicienceGraph(){
  const [valid,setvalid]=useState(100)
  const [expired,setExpired]=useState(200)

  const data = [
    { name: 'Valid', value: valid,  percentage: `${(valid * 100/(valid+expired)).toFixed(0)}%` },
    { name: 'Expired', value: expired,    percentage:`${(expired * 100/(valid+expired)).toFixed(0)}%`}
  
  ];

  

  const getExpiredLicience = async () => {
    axios
      .get("http://203.99.61.134:7077/web/graph/licenceExpiry")
      .then((response) => {

        const result = response.data;
        if (result){

          setvalid(result[0]["total"]);
          setExpired(result[1]["total"]);
        }
      });
  }; 

  useEffect(()=>{
    getExpiredLicience()
  },[])

return(
  <div className="graph-div">
              {/* ====================================licience gragh */}
              <div className=" graph-body">
              <ResponsiveContainer>

<PieChart width={400} height={400} >
<Legend verticalAlign="top" height={36} content={custumizedLegend(valid,expired)}/>
<Pie
  data={data}
  
  innerRadius={60}
  outerRadius={80}
  fill="#8884d8"
  paddingAngle={5}
  dataKey="value"
  >
    <LabelList dataKey="percentage" position="insideStart" fill='white'  />
  {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
</Pie>

</PieChart>
</ResponsiveContainer>
              </div>
              <div className="graph-footer bg-gradient-to-t from-green-100 to-green-500">
                License Checked
                <span className='footer-value'>
                {valid+expired}
                  </span> 
                  </div>
            </div>
  
    );
    
}