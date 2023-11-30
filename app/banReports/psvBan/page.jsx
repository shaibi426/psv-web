'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BanDataTable } from '@/app/ui/bantable'
import { columns } from './columns'

const PsvBan = () => {
  const [banData, setData] = useState();

  const getData = async () => {
    await axios
      .get(`http://116.0.45.14:5000/web/ban/getban`)
      .then((response) => {
        const result = response.data;

        if (result) {
          setData(result);
          console.log(result);
        } else {
          alert("No data Found");
        }
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center bg-gradient-to-br from-blue-700 to-purple-700 bg-clip-text text-transparent w-full p-3 my-10">
        <h1 className="font-prompt font-extrabold text-4xl  ">
          {" "}
          VEHICLE BAN REPORT{" "}
        </h1>
      </div>
      <div className="w-full flex justify-center">
        {banData &&  
        <BanDataTable columns={columns} data={banData} />
      }
      </div>
    </div>
  );
};

export default PsvBan;