"use client"
import React,{useState,useEffect} from "react";
import Dashboard from './dashboard'
import Header from "./header";

export default function Main(){
    return(

        <div className="flex flex-col w-full min-h-screen ">
            <Header />
           <Dashboard />
        </div>
    )
}

