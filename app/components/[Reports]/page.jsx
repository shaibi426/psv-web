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
  const [startTime, setStartTime] = useState("06:00");
  const [endTime, setEndTime] = useState("14:00");
  const [reportName, setReportName] = useState();
  const [isTimeDiv, setTimeDiv] = useState("invisible");
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
      setTimeDiv("visible");
      setPsvDiv("block");
    }
    if (report == "Trip of a Driver") {
      setTimeDiv("visible");
      setCnicDiv("block");
    }
  });

  //-----------------------------report link
  console.log(reportName);

  const PSVsTrevelled = `/components/generalReports/PSvsTravelled/${shortStartDate}x${shortEndDate}x${startTime}x${endTime}x${psvNo}"`;
  const tripOfDriver = `/components/generalReports/tripOfDriver/${shortStartDate}x${shortEndDate}x${startTime}x${endTime}x${dvrCnic}"`;
  return (
    <div className="flex justify-center items-center w-full h-screen fill bg-[url('https://media.istockphoto.com/id/1360927961/photo/abstract-background-with-interweaving-of-colored-lines-and-dots-network-connection-structure.jpg?s=170667a&w=0&k=20&c=yF8UrEJ3LO-_wD0IXKwPwtwEC5unK4sG9Q6dXF3TMRc=')] bg-blue-900  bg-blend-color-dodge bg-cover ">
      <div
        className={`w-2/5 h-3/5 bg-white rounded-md flex flex-col gap-5 justify-center items-center  bg-opacity-40`}
      >
        <div className="flex flex-col gap-2 px-2  ">
          {/*  Start date picker */}
          <div className=" flex flex-row bg-green-500 rounded-r-full rounded">
            <div className="text-center p-2 text-white w-2/5">Start date</div>
            {/* <div
          className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
          style={containerStyles}
        > */}
            <DatePicker
              value={startDate}
              onChange={(value) => setStartDate(value)}
            />
            {/* </div> */}
          </div>
          {/* end date -------------------------------------- */}
          <div className=" flex flex-row bg-red-500 rounded-r-full ">
            <div className="text-center p-2 text-white w-2/5">End date</div>
            {/* <div
          className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
          style={containerStyles}
        > */}

            <DatePicker
              value={endDate}
              onChange={(value) => setEndDate(value)}
            />
            {/* </div> */}
          </div>
        </div>

        {/* ============================ time div*/}
        <div className={`flex flex-row  p-5 gap-4 ${isTimeDiv}`}>
          <TimePicker
            value={startTime}
            onChange={(value) => setStartTime(value)}
            hour24
            variant="brand"
          />
          <TimePicker
            value={endTime}
            onChange={(value) => setEndTime(value)}
            hour24
          />
        </div>
        {/* =====================================to get psv number */}
        <div
          className={`${isPsvDiv} flex flex-row justify-center items-center gap-3`}
        >
          <label htmlFor="psv" className="text-black text-bold ">
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
          className={`${isCnicDiv} flex flex-row justify-center items-center gap-3`}
        >
          <label htmlFor="dvrcnic" className="text-black text-bold w-2/5 ">
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
        <div className="w-full flex justify-center items-center mt-10">
          <Link
            href={report == "Trip of a Driver"? tripOfDriver:report == "PSVs Travelled"?PSVsTrevelled:""}
            className="w-2/6 bg-white rounded-md p-2 font-bold hover:decoration-transparent text-center"
          >
            Generate Report
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainReport;

// href={reportName == "Trip of a Driver"? tripOfDriver:reportName == "PSVs Travelled"?PSVsTrevelled:""}