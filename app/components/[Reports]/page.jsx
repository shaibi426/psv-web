"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { DatePicker, TimePicker } from "react-rainbow-components";

const containerStyles = {
  maxWidth: 300,
};

const MainReport = (props) => {
  const [startDate, setStartDate] = useState(Date());
  const [endDate, setEndDate] = useState(Date());
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("23:59");
  const [reportName, setReportName] = useState();
  const [isTimeDiv, setTimeDiv] = useState("hidden");
  const [isPsvDiv, setPsvDiv] = useState("hidden");
  const [isCnicDiv, setCnicDiv] = useState("hidden");
  const [psvNo, setPsvNo] = useState("");
  const [dvrCnic, setDvrCnic] = useState("");

  const shortStartDate = new Date(startDate)
    .toLocaleDateString()
    .split("/")
    .reverse()
    .join("-");
  const shortEndDate = new Date(endDate)
    .toLocaleDateString()
    .split("/")
    .reverse()
    .join("-");

  let report = props.params.Reports.split("%20").join(" ");
  useEffect(() => {
    setReportName(report);
    if (report == "PSVs Travelled") {
      setTimeDiv("block");
      setPsvDiv("block");
    }
    if (report == "Trip of a Driver") {
      setTimeDiv("block");
      setCnicDiv("block");
    }
  },[report]);

  //-----------------------------report link 
  console.log(reportName,);

  const PSVsTrevelled = `/components/generalReports/PSvsTravelled/${shortStartDate}x${shortEndDate}x${startTime}x${endTime}x${psvNo}"`;
  const tripOfDriver = `/components/generalReports/tripOfDriver/${shortStartDate}x${shortEndDate}x${startTime}x${endTime}x${dvrCnic}"`;

  const vehicleComprehansive =`/components/vehicleReports/comperihansive/${shortStartDate}x${shortEndDate}`
  const routeExpiryReport =`/components/vehicleReports/routeExpiry/${shortStartDate}x${shortEndDate}`
  const fitnessExpiryReport =`/components/vehicleReports/fitnessExpiry/${shortStartDate}x${shortEndDate}`
  // const licenseExpirtreport =`app/components/driverReports/licenseExpiry/${shortStartDate}x${shortEndDate}`

  return (
    <div className="flex justify-center items-center w-full h-screen fill bg-[url('https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/01/gradient-network-connection-background_23-2148865392-e1656081168680.jpg?fit=626%2C417&ssl=1')] bg-pmpblue bg-blend-color-dodge bg-cover ">
      <div
        className={`w-3/6 h-3/5 rounded-md flex flex-col gap-5 justify-center items-center  border border-white bg-white bg-opacity-10`}
      >
        <div className="flex flex-row gap-4 px-3  ">
      
          {/*  Start date picker */}
          <div className=" flex flex-row bg-green-500 rounded-r-full rounded">
            <div className="text-center p-2 text-white w-2/5">Start date</div>
        
            <DatePicker
              value={startDate}
              onChange={(value) => setStartDate(value)}
            />
            {/* </div> */}
          </div>
          {/* end date -------------------------------------- */}
          <div className=" flex flex-row bg-red-500 rounded-r-full ">
            <div className="text-center p-2 text-white w-2/5">End date</div>
           

            <DatePicker
              value={endDate}
              onChange={(value) => setEndDate(value)}
            />
            {/* </div> */}
          </div>
        </div>

        {/* ============================ time div*/}
        <div className={`flex flex-row gap-4 px-3 ${isTimeDiv}`}>
        <div className=" flex flex-row bg-teal-500 rounded-r-full rounded">
            <div className="text-center p-2 text-white w-2/5">Start Time</div>
          <TimePicker
            value={startTime}
            onChange={(value) => setStartTime(value)}
            hour24
            variant="brand"
          />
          </div>
          <div className=" flex flex-row bg-orange-500 rounded-r-full rounded">
            <div className="text-center p-2 text-white w-2/5">End Time</div>
          <TimePicker
            value={endTime}
            onChange={(value) => setEndTime(value)}
            hour24
          />
          </div>
        </div>
        {/* =====================================to get psv number */}
        <div
          className={`${isPsvDiv} flex flex-row justify-center items-center gap-3 mt-10 bg-violet-400 rounded-r-full `}
        >
          <label htmlFor="psv" className="text-black font-bold w-3/6 pl-2 ">
            {" "}
            Reg.No
          </label>
          <input
            id="psv"
            placeholder="BSA4100"
            type="text"
            className="rounded-full bg-white w-full p-2"
            value={psvNo}
            onChange={(e) => setPsvNo(e.target.value)}
          />
        </div>

        {/* =====================================to get driver cnic no  number */}
        <div
          className={`${isCnicDiv} flex flex-row justify-center items-center gap-3  mt-10 bg-violet-400 rounded-r-full`}
        >
          <label htmlFor="dvrcnic" className="text-black font-bold w-3/6   text-center rounded-full">
            {" "}
            Driver CNIC
          </label>
          <input
            id="dvrcnic"
            placeholder="345011516478"
            type="text"
            className="rounded-full bg-white w-full p-2"
            value={dvrCnic}
            onChange={(e) => setDvrCnic(e.target.value)}
          />
        </div>

        {/* Button -------------------------------------- */}
        <div className="w-full flex justify-center items-center mt-10 ">
          <Link
            href={report == "Trip of a Driver"? tripOfDriver:report == "PSVs Travelled"?PSVsTrevelled:report == "Comprehensive Data Report"?vehicleComprehansive:report =="Route Permit Expiry Report"?routeExpiryReport:report =="Vehicle Fitness Expiry Report"?fitnessExpiryReport:report =="Vehicle Fitness Expiry Report"?comprehansiveReport:""}
            className="w-2/6 bg-white rounded-md p-2 font-bold hover:no-underline text-pmpblue text-center"
          >
            Generate Report
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainReport;

