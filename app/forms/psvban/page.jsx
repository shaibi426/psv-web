'use client'
import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import Output from './../../ui/output'
import Dateinput from '../../ui/dateInput';
import Textinput from '../../ui/textInput';
import Textarea from '../../ui/textArea';
import Pdfpicker from '../../ui/pdfpicker';

const Psvban = () => {
const today = new Date().toISOString().split("T")[0]

    const [startDate,setStartDate] = useState(today)
    const [endDate,setEndDate] = useState(today)

    const [orderNo,setOrderNo] = useState("")
    const [authority,setAuthority] = useState("")

    const [reason,setReason] =useState("")

  return (
    <div className = '[background:linear-gradient(49.10deg,rgba(100,67,200,0.13)_25.19%,rgba(229,255,55,0.05)_70%)] min-h-screen flex items-center flex-col'>

    <div className='flex items-center justify-center bg-gradient-to-br from-blue-700 to-purple-700 bg-clip-text text-transparent w-full p-3 my-5'>
      <h1 className='font-prompt font-extrabold text-4xl'> VEHICLE BAN FORM </h1>
    </div>

    {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>FORM */}
    <div className='w-3/5  -2 rounded-lg p-3  flex justify-center  flex-col'>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  search */}
        <div className=' rounded-md shadow-blue-900 border border-blue-500  shadow-md p-2 w-full bg-blue-500 flex gap-2 items-cenetr justify-center'>
            <fieldset className='  p-1   border-slate-300  w-1/5  gap-2 flex pl-2  '>
            <legend className='text-xs text-white rounded-sm px-1'>Letters</legend>
            <input type="text" placeholder ='XYZ' className= ' rounded-md shadow-inner  shadow-blue-900 pl-2 w-3/4     p-1 focus:outline-none   -separate' />
            <input type="text" placeholder ='A' className= ' rounded-md  shadow-inner shadow-blue-900 pl-2 w-1/4     p-1 focus:outline-none   -separate' />
            </fieldset>
            <fieldset className='  p-1   border-slate-300  w-1/5  gap-2 flex pl-2  '>
            <legend className='text-xs text-white rounded-sm px-1'>Modal</legend>
            <input type="text" placeholder ='2023' className= ' rounded-md shadow-inner  shadow-blue-900 pl-2 w-full     p-1 focus:outline-none   -separate' />
           
            </fieldset>
            <fieldset className=' p-1   border-slate-300  w-1/5  gap-2 flex pl-2  '>
            <legend className='text-xs text-white rounded-sm px-1'>Reg.No</legend>
            <input type="text" placeholder ='0000' className= 'rounded-md shadow-inner   shadow-blue-900 pl-2 w-full     p-1 focus:outline-none   -separate' />
           
            </fieldset>
            <div className='p-1  pt-5 border-slate-300  w-1/5  gap-2  pl-2  flex justify-end' >
            <button className='  rounded-lg border-separate    px-5 bg-white shadow-md shadow-gray-600'>
                <BsSearch  className='font-bold'/>
            </button>
            </div>
        </div>

        {/* ================================== Vehicle detaail */}
        <div className='border border-slate-400 rounded-md mt-6 p-5 shadow-lg shadow-gray-500'>
            <div className='flex '>
        <div  className='w-2/4 flex flex-col pr-2 '>
        <Output label='Vehicle No :' value = 'LES-2019-4578' />
        <Output label='Company :' value = 'Faisal Mover' />
        <Output label='Terminal :' value = 'Lahore' />
        </div>
        <div className='flex w-2/4 gap-3 p-2'>
            <div className='w-2/4 min-h-full rounded-md border-slate-400  border bg-slate-200 flex justify-center  shadow-md shadow-gray-600 items-center'> Preview not avaible</div>
            <div className='w-2/4 min-h-full rounded-md border-slate-400  border bg-slate-200 flex justify-center shadow-md shadow-gray-600  items-center'> Preview not avaible</div>
        </div>
        </div>

        <div  className='flex w-full'>
        <Output label='Engine No :' value = 'CH012346ZQ3223432'  />
        <Output label='Chasis No :' value = 'zxc56456fsd564656'  />
        </div>
        <div className='flex w-full'>
        <Output label='Color :' value = 'BLUE' />
        <Output label='Route :' value = 'Lahore to Islamabad' />
        </div>
        </div>


    {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=-------------Form  */}
    <div className='border  border-slate-400 rounded-md mt-6 p-5 shadow-lg shadow-gray-500'>
    <div className='flex '>
        <Textinput  label ='Order No' value = {orderNo} setter ={setOrderNo}/>
        <Textinput  label ='Issued by' value = {authority} setter ={setAuthority}/>
        </div>
        <div className='flex '>
        <Dateinput  label =' Ban From ' value = {startDate} setter ={setStartDate}/>
        <Dateinput  label ='Ban To' value = {endDate} setter ={setEndDate}/>
        </div>

        <div className='flex '>
        <Textarea  label ='Reason To Ban' value = {reason} setter ={setReason}/>
        </div>

        <div className='flex '>
            <Pdfpicker  label= 'Ban Order'/>
            <Pdfpicker  label= 'FIR (If lodged)'/>
        
        </div>

        <div className='flex w-full gap-3 justify-center pt-10 pb-5'>
            <button className='bg-blue-600 text-white font-normal w-1/5 rounded-md py-1 px-4 '>Save</button>
            <button className='bg-red-600 text-white font-normal w-1/5 rounded-md py-1 px-4 '>Clear</button>
        
        </div>
    </div>
       



       
    </div>

    </div>
  )
}

export default Psvban


