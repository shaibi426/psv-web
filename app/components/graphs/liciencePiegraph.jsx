"use client"
import { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell,Legend,LabelList, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE','#EB9002',];

export default function LicienceGraph(){
  const [expired,setExpired]=useState(800)
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
  <div className="graph-div">
              {/* ====================================licience gragh */}
              <div className=" graph-body">
              <ResponsiveContainer>

<PieChart width={400} height={400} >
<Legend verticalAlign="top" height={36}/>
<Pie
  data={data}
  
  innerRadius={60}
  outerRadius={80}
  fill="#8884d8"
  paddingAngle={5}
  dataKey="value"
  >
    <LabelList dataKey="value" position="insideStart" fill='white' />
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