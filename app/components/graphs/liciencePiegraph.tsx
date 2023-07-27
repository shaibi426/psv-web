"use client"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group E', value: 300 },
  { name: 'Group G', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#EB9002'];

export default function LicienceGraph(){
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