"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "@/app/ui/table";
import { columns } from "./columns";
export default function Dsr() {
  return (
    <div className="bg-gray-200  w-full flex justify-center items-start pt-10 h-screen flex-grow">
      <div className="w-5/6 h-5/6 rounded-md    p-2 bg-gradient-to-br from-[#6f6dcf] to-[#9151e4]">
       <DataTable columns={columns} data = {{}} />
      </div>
    </div>
  );
}


