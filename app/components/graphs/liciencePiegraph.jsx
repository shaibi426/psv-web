"use client"
import { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell,Legend,LabelList, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const COLORS = ['#0088FE','#EB9002',];

export default function LicienceGraph(){
  const [expired,setExpired]=useState(0)
  const [valid,setvalid]=useState(0)

  const data = [
    { name: 'Valid', value: valid },
    { name: 'Expired', value: expired },
  
  ];

  const getExpiredLicience = async () => {
    axios
      .get("http://cpo.nhmp.gov.pk:7077/web/graph/licenceExpiry")
      .then((response) => {

        const result = response.data;
        console.log(result)
        setvalid(result[0]["total"]);
        setExpired(result[1]["total"]);
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