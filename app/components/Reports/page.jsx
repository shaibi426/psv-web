"use client";
import React, { useState, useEffect } from "react";
import { DatePicker } from "react-rainbow-components";
import { useParams } from "next/navigation";
import { parsedUrlQueryToParams } from "next/dist/server/future/route-matches/route-match";


const containerStyles = {
  maxWidth: 300,
};

const MainReport = () => {
  const [startDate, setStartDate] = useState(Date());
  const [endDate, setEndDate] = useState(Date());

  const params =useParams()

  const reportName = params.key

  useEffect(
    ()=>{
      console.log(params.ke)
    }
  )

  return (
    <div className="flex justify-center items-center w-full h-screen fill bg-[url('https://media.istockphoto.com/id/1360927961/photo/abstract-background-with-interweaving-of-colored-lines-and-dots-network-connection-structure.jpg?s=170667a&w=0&k=20&c=yF8UrEJ3LO-_wD0IXKwPwtwEC5unK4sG9Q6dXF3TMRc=')] bg-blue-900  bg-blend-color-dodge bg-cover ">

      <div
        className={`w-2/5 h-3/5 bg-white rounded-md flex flex-col gap-5 justify-center items-center  bg-opacity-40`}
      >
        {/*  Start date picker */}
        <div className=" flex flex-row bg-green-500 rounded-r-full rounded">
          <div className="text-center p-2 text-white">Start date</div>
        <div
          className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
          style={containerStyles}
        >
          <DatePicker
            required
            value={startDate}
           
            onChange={(value) => setStartDate(value)}
          />
        </div>
        </div>
        {/* end date -------------------------------------- */}
        <div className=" flex flex-row bg-red-500 rounded-r-full">
        <div className="text-center p-2 text-white">End date</div>
        <div
          className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
          style={containerStyles}
        >
         
          <DatePicker
            required
            value={endDate}
           
            onChange={(value) => setEndDate(value)}
          />
        </div>
        </div>
        {/* Buuton -------------------------------------- */}
        <div className="w-full flex justify-center items-center mt-10">

        <button
          className="w-2/6 bg-white rounded-md p-2 font-bold"
          onclick={() => console.log(keyword)}
          >
          Generate Report
        </button>
          </div>
      </div>
    </div>
  );
};

export default MainReport;
