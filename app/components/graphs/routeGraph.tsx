"use client"
import { LineChart,Line,CartesianGrid, XAxis, YAxis } from "recharts"

export default function RoutGraph() {
    const data =[
        {'name':'a',value:10},
        {'name':'b',value:2},
        {'name':'c',value:13},
        {'name':'d',value:25},
    ]
    return (
      <div className='flex justify-center items-center  m-2 p-2'>
        <LineChart width={300} height={200} data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    );}