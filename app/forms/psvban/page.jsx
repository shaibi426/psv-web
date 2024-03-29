'use client'
import React, { useState,Suspense } from 'react'
import { BsSearch } from "react-icons/bs";
import Output from './../../ui/output'
import Dateinput from '../../ui/dateInput';
import Textinput from '../../ui/textInput';
import Textarea from '../../ui/textArea';
import Pdfpicker from '../../ui/pdfpicker';
import axios from'axios'
import { lastRecordNo } from '@/appconfig/functions';
import FitnessGrph from '@/app/components/graphs/fitnessgraph';

const Psvban = () => {

const today = new Date().toISOString().split("T")[0]

    const [startDate,setStartDate] = useState(today)
    const [endDate,setEndDate] = useState(today)

    const [orderNo,setOrderNo] = useState("")
    const [authority,setAuthority] = useState("")

    const [reason,setReason] =useState("")
    const [orderDoc,setOrderDoc] =useState("")
    const [fir,setFir] =useState("")
    const [id,setId] =useState("")

    //====================================states 
    const [letter,setLetter] = useState("")
    const [extra,setExtra] = useState("")
    const [modal,setModal] = useState("")
    const [regNo,setRegNo] = useState("")
    const [psvSearch,setPsvSearch] = useState("")

    //============================= clear form

    const clearForm =()=>{
        setOrderNo("")
        setAuthority("")
        setStartDate(today)
        setEndDate(today)
        setReason("")
        setOrderDoc("")
        setFir("")
    }

    // ===================================get detaill

const getPsv = ()=>{
   
    axios.get(`http://localhost:5000/psv/getPsv/${letter}/${modal}/${regNo}`).then(
        response =>{
            const result = response.data[0]
            if (result) {
                setPsvSearch(result )
            }else{
                alert('Vehicle Not In record')
            }
        }
    )
}


//================================================save Data
const saveData =()=> {
    try {
    axios.get(`http://localhost:5000/gen/last/banLog/banId`).then(
        response=>{
            const result = response.data[0] 
            

            axios.post("http://116.0.45.14:5000/web/ban/banpsv" ,
            
            {
                banId : result.last,
                date : today,     
                Type : 'psv',
                psv : psvSearch.psvNo,
                driver : "",
                company : '',
                orderNo : orderNo,
                issuedby : authority,
                from : startDate,
                to : endDate,
                OfficeType : 'zone',
                office : 'North 3',
                Reason : reason,
                fir : fir,
                user : 3450277818265 
        }
            
            
            
            )
    .then(() =>{ 

axios.patch(`http://116.0.45.14:5000/psv/banPsv/${psvSearch.psvNo}`, {

                    banId:result.last,
                    banStatus :'ban',
                    banArea :'zone',
                    banoffice:'Motorway Central-II'
                    
})
 
        alert(`---------Data Saved-------------- \n   The Vehicle # ${psvSearch.psvNo} has been banned in N5 North Zone from '${startDate}' to '${endDate}'`);
        })
        }
    )
    }
     catch (error) {
      console.log(error)
    }
    
  }   


// const checkban =(psv)=>{

//     axios.get(`http://116.0.45.14:5000/web/ban/checkban/${psv}`).then(
//         response=>{
//             const result = response.data[0]

//             console.log(result)
//             if(result.banArea == 'sector'){
//                 if(result.banoffice == 'N5 North'){
//                     alert("vehicl eban in sector")
//                 }
//             }
//             else if (result.banArea == 'zone'){
//                 if(result.banoffice == 'N5 North'){
//                     alert("vehicle ban in Zone")
//                 }
//             }
//             else if (result.banArea == 'region'){
//                 if(result.banoffice == 'N5 North'){
//                     alert("vehicle ban in Region")
//                 }
//             }
//             else if(result.banArea == 'hq'){
//                 if(result.banoffice == 'N5 North'){
//                     alert("vehicle ban in NHMP")
//                 }

//                 else{
//                     alert("OFFICE",result.banoffice,'area >>>>>',result.banArea)
//                 }
//             }
//         }
//     )

// }


    


  return (
    <div className = '[background:linear-gradient(49.10deg,rgba(100,67,200,0.13)_25.19%,rgba(229,255,55,0.05)_70%)] min-h-screen flex items-center flex-col'>

    <div className='flex items-center justify-center bg-gradient-to-br from-blue-700 to-purple-500 bg-clip-text text-transparent w-full p-3 my-5'>
      <h1 className='font-prompt font-extrabold text-4xl'> VEHICLE BAN FORM </h1>
    </div>

    {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>FORM */}
    <div className='w-3/5  -2 rounded-lg p-3  flex justify-center  flex-col'>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  search */}
        <div className=' rounded-md shadow-blue-900 border border-blue-500  shadow-md p-2 w-full bg-blue-500 flex gap-2 items-cenetr justify-center'>
            <fieldset className='  p-1   border-slate-300  w-1/5  gap-2 flex pl-2  '>
            <legend className='text-xs text-white rounded-sm px-1'>Letters</legend>
            <input value={letter}  onChange={(e)=>setLetter(e.target.value.toUpperCase())} type="text" placeholder ='XYZ' className= ' rounded-md shadow-inner  shadow-blue-900 pl-2 w-full     p-1 focus:outline-none   -separate' />
            {/* <input value={extra} onChange={(e)=>setExtra(e.target.value)} type="text" placeholder ='A' className= ' rounded-md  shadow-inner shadow-blue-900 pl-2 w-1/4     p-1 focus:outline-none   -separate' /> */}
            </fieldset>
            <fieldset className='  p-1   border-slate-300  w-1/5  gap-2 flex pl-2  '>
            <legend className='text-xs text-white rounded-sm px-1'>Modal</legend>
            <input value={modal} onChange={(e)=>setModal(e.target.value)} type="text" placeholder ='2023' className= ' rounded-md shadow-inner  shadow-blue-900 pl-2 w-full     p-1 focus:outline-none   -separate' />
           
            </fieldset>
            <fieldset className=' p-1   border-slate-300  w-1/5  gap-2 flex pl-2  '>
            <legend className='text-xs text-white rounded-sm px-1'>Reg.No</legend>
            <input value={regNo} onChange={(e)=>setRegNo(e.target.value)} type="text" placeholder ='0000' className= 'rounded-md shadow-inner   shadow-blue-900 pl-2 w-full     p-1 focus:outline-none   -separate' />
           
            </fieldset>
            <div className='p-1  pt-5 border-slate-300  w-1/5  gap-2  pl-2  flex justify-end' >
            <button onClick={()=>getPsv()} className='  rounded-lg border-separate    px-5 bg-white shadow-md shadow-gray-600'>
                <BsSearch  className='font-bold'/>
            </button>
            </div>
        </div>

        {/* ================================== Vehicle detaail */}
        <Suspense fallback={ <FitnessGrph />}>


        <div className='border border-slate-400 rounded-md mt-6 p-5 shadow-lg shadow-gray-500 bg-indigo-50'>
            <div className='flex '>
        <div  className='w-2/4 flex flex-col pr-2 '>
        <Output label='Vehicle No :' value = {psvSearch?psvSearch.prefixRegNo +"-" +psvSearch.vehicleModel+"-"+psvSearch.regNo:""} />
        <Output label='Company :' value = {psvSearch?psvSearch.companyName:"-"} />
        <Output label='Terminal :' value =  {psvSearch?psvSearch.subCompany:"-"} />
        </div>
        <div className='flex w-2/4 gap-3 p-2'>
            <div className='w-2/4 min-h-full rounded-md border-slate-400  border bg-slate-200 flex justify-center  shadow-md shadow-gray-600 items-center'> Preview not avaible</div>
            <div className='w-2/4 min-h-full rounded-md border-slate-400  border bg-slate-200 flex justify-center shadow-md shadow-gray-600  items-center'> Preview not avaible</div>
        </div>
        </div>

        <div  className='flex w-full'>
        <Output label='Engine No :' value =  {psvSearch?psvSearch.engineNo:""}  />
        <Output label='Chasis No :' value =  {psvSearch?psvSearch.chasisNo:""}  />
        </div>
        <div className='flex w-full'>
        <Output label='Color :' value =  {psvSearch?psvSearch.vehicleColor:""} />
        <Output label='Route :' value =  {psvSearch?psvSearch.routeFrom + " - "+ "to" + " - " + psvSearch.routeTo:""} />
        </div>
        </div>

        </Suspense>


    {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=-------------Form  */}
    <div className='border  border-slate-400 rounded-md mt-6 p-5 shadow-lg shadow-gray-500 bg-indigo-50'>
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
            <Pdfpicker  label= 'Ban Order'        setter ={setOrderDoc}/>
            <Pdfpicker  label= 'FIR (If lodged)'  setter ={setFir}/>
        </div>

        <div className='flex w-full gap-3 justify-center pt-10 pb-5'>
            <button onClick = {()=>saveData()} className='hover:bg-indigo-600 bg-blue-600 text-white font-normal w-1/5 rounded-md py-1 px-4 '>Save</button>
            <button onClick={()=>clearForm()} className='bg-red-600 text-white font-normal w-1/5 rounded-md py-1 px-4 '>Clear</button>
        
        </div>
    </div>

    </div>

    </div>
  )
}

export default Psvban


