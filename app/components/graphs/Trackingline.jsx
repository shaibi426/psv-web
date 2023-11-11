"use client";
import React, { PureComponent, useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
export default function TrackinLineGraph() {
  const [data, setData] = useState();

  const getExpiredLicience = async () => {
    axios.get('http://203.99.61.134:7077/web/graph/pointwiseReport').then(
      response=>{
        const result = response.data
        setData(result);
        console.log(result)
        
      }
      )
    
  };

  useEffect(() => {
    getExpiredLicience();
  });

  const CustomTooltip = ({ active, payload, label,Loaction }) => {
    if (active && payload && payload.length) {
      return (
        <div className=" bg-red-500">
         
          <p className="intro">{label}</p>
          <p className="desec">{Loaction}</p>
         
        </div>
      );}}

  return (
    <div className="bg-white w-5/6 h-60 rounded-lg m-4 shadow-md shadow-gray-600 ">
      {/* ============================================tracking Graph */}
      <div className=" graph-body">
        <ResponsiveContainer width="100%" height="100%" >
          <AreaChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="Location" />
           <YAxis />
           <Tooltip />
            <Legend verticalAlign="top" type="square" height={36} />
            
            <Area
              type="monotone"
              dataKey="PSVs"
              stackId="1"
              stroke="purple"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Location"
              stackId="1"
              stroke="green"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="graph-footer bg-gradient-to-t from-orange-100 to-orange-400 font-semibold">
        Location Wise Vehicle Checking
      </div>
    </div>
  );
}
