'use client'
import React ,{useState}from 'react'

import { signIn } from "next-auth/react"
import Image from 'next/image'
import MainBck from '../../../public/2.jpg'
import logo from '../../components/assests/PMP LOGO.png'
import { useRouter } from 'next/navigation'
import { User2,KeyRound } from 'lucide-react'
import axios from 'axios'



const Signinhandle = () => {
    // const[name,setUsername]= useState("")
    // const[pwd,setpassword]= useState("")

    const [data, setData] = useState([])
    const [user,setUser] =useState("")
    const [pwd,setPwd] =useState("")
    const [emptyUser,setEmptyUser] =useState('hidden')
    const [emptyPwd,setEmptyPwd] =useState('hidden')


    const onsubmit = async ()=>{
    await  signIn('credentials',
{
username : user,
password : pwd,
redirect:true,
callbackUrl :'/'
})}





const router = useRouter()

  const login = async () => { 
      
    if (user == ''){
      setEmptyUser('block')
      setEmptyPwd('hidden')
    }
    else if ( user !== '' && pwd == ""){
      setEmptyUser('hidden')
      setEmptyPwd('block')
    }
    else  if (user !== '' && pwd !== ""){
      setEmptyUser('hidden')
      setEmptyPwd('hidden')
      
      axios.get(`http://203.99.61.134:7077/users/getUser/${user}`).then(
        response =>{
          const result = response.data[0]
          if(result){
            result.userPwd == pwd?router.push('/dashboard'): alert("Wrong password")
          }
          else{
            alert("Please Enter Correct User")
          }
        }
      )
    }
  };



  return (
    <div className="bg-[#051532]">
  
    <div className=' w-full flex flex-row  gap-2 items-center justify-stretch pl-8 pb-5 pt-5 sm:pl-10'>
    <Image src={logo}  alt="logo" width={90} height ={90} className='sm:w-34 sm:h-34 w-10 h-10'
     />
     <h1 className=' font-extrabold sm:text-3xl text-white font-prompt text-xs md:text-2xl lg:text-3xl  '> PSVs Management Information System <span className='block ml-20 sm:ml-1 sm:inline'>(PSV-MIS)</span></h1>
      </div>
  <div className=" h-screen flex justify-between items-center md:items-start lg:items-center ">
    <div className =' items-start pt-10 h-full w-2/4 justify-center hidden sm:block md:hidden lg:block '>
    <Image src={MainBck}  alt="main page background" className=''
     />
     </div>
     <div className ="sm:w-2/5 h-full pb-10 flex items-start justify-center w-full md:w-full lg:w-2/5 md:h-4/5 md:items-center  lg:h-full lg:items-start  ">
      <div className='bg-blue-100 sm:w-3/4 md:w-4/6 lg:3/4 bg-opacity-10 rounded-md h-3/4 pt-15 p-10 flex flex-col justify-center gap-3'>

        <div>
          <h1 className='text-3xl pb-5 font-extrabold text-yellow-400'> Log <span className='text-blue-400'> in</span> </h1>
        </div>
       <p className ={`text-xs text-red-600 ${emptyUser}`}>Please Enter User ID</p>
       <div className='flex-row flex items-center  bg-white'> 
       <User2 stroke='#051532' className=' absolute  w-[32px] h-[40px] p-2' />
      <input 
      className=' p-2 text w-full pl-10 '
      placeholder='User'
      type ='text'
      value ={user}
      onChange={(e)=>setUser(e.target.value)}
       />
       </div>
       <div className='flex-row flex items-center  bg-white'> 
       <KeyRound stroke='#051532' className='absolute  w-[32px] h-[40px] p-2' />
      <input 
      className='rounded-sm p-2 text w-full pl-10' 
      placeholder='Passward' 
      type='password'
      value ={pwd}
      onChange={(e)=>setPwd(e.target.value)}
      />
       </div>
       <p className ={`text-xs text-red-600 ${emptyPwd} `}>Please Enter Password</p>
      <div className='flex w-full justify-end pt-10'>
      <button
      onClick={()=>onsubmit()}
      className='bg-blue-500 p-2 w-3/5 rounded-md text-white font-semibold'>Sign in</button>
      </div>
      
      <div className='mt-20 text-center'>
        <p className ='text-center text-white font-extralight text-xs w-full italic '>Copyrights&copy;   reserved by</p>
      <p className ='text-center text-white font-extralight text-xs w-full '>  <span className='font-bold '> NHMP Training College</span>  <span className='italic font-bold'> IT Wing.</span></p>
      <p className='text-gray-200 text-xs'>Hosted by NHMP Data Center Islamabad</p>
      </div>
      </div>
     </div>
    
  </div>
  </div>
  )
}


export default Signinhandle