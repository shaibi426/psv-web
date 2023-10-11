"use client"

import Image from 'next/image'
import MainBck from '../../public/2.jpg'
import logo from '../components/assests/PMP LOGO.png'
import React ,{ useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'



export default function Login() {
  const [data, setData] = useState([])
  const [user,setUser] =useState('')
  const [pwd,setPwd] =useState('')
  const [emptyUser,setEmptyUser] =useState('hidden')
  const [emptyPwd,setEmptyPwd] =useState('hidden')

const router = useRouter()

  const login = async () => { 
       
    if (user == ''){
      setEmptyUser('block')
      setEmptyPwd('hidden')
    }
    else if ( user !== '' && pwd == ''){
      setEmptyUser('hidden')
      setEmptyPwd('block')
    }
    else  if (user !== '' && pwd !== ''){
      setEmptyUser('hidden')
      setEmptyPwd('hidden')
   if(data[0]['UserPassword'], btoa(pwd)){
    router.push('/')
   }
      
    }
 
  };

  useEffect(() => {


    const getUser = async () => {
      const response = await fetch(
        `/api/login/${user}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
           
          },
        }
      );
      const result = await response.json();
      setData(result);
      
    };


//     const getUser = async ()=>{
//       axios.get(`${process.BASE_URL}/users/getUser/${user}`).then(
//         response =>{
//           const result = response.data[0]
//           if (result){
//             console.log(result)
//           }
//         }
//       )
//     }

//     const signIn =async()=>{       

//       if(user== "") {
//           Alert.alert("Please enter User Name") }
//          else if(userpwd== "") {
//               Alert.alert("Please enter Password") }
//             else  if(location== "") {Alert.alert("Please enter current location") }
//            else   if(userbound== "") {Alert.alert("Please Select North or South Bound")}
//   else {
      
//   if(user && userpwd && location && userbound){
//    await axios.get(`${process.BASE_URL}/users/getUser/${user}`
//      // console.log(`${global.BASE_URL}/users/getUser/${user}`)
     
//     ).then(
//       function (response){
//           const result = response.data[0]
//     if(result) {
     
//     if(userpwd == result.userPwd){
     
//       storeUserSession(user,result.role,result.userName,result.rank,result.userPwd)
      
//       navigation.navigate("Home")
//       clearAll()
//     }
//     else {
//       Alert.alert("Wrong Password")
//     }
//   }
//   else{
//      Alert.alert("User Not Registered")
// }

// }
      
//     ).catch(
//       function(error){
//           console.log(error)
//       }
//     )
//   }}

// }
    getUser();
  
   
  },[user ]);

  return (
    <div className="bg-[#051532]">
      <div className=' w-full flex flex-row  gap-2 items-center justify-stretch pl-10 pt-5'>
      <Image src={logo}  alt="logo" width={80} height ={80} 
       />
       <h1 className=' font-extrabold text-3xl text-white font-prompt '>PSVs Management Information System (PSV-MIS)</h1>
        </div>
    <div className=" h-screen flex justify-between items-center">
      <div className ='flex items-start pt-10 h-full w-2/4 justify-center'>
      <Image src={MainBck}  alt="main page background" className=''
       />
       </div>
       <div className ="w-2/5 h-full pb-10 flex items-start ">
        <div className='bg-blue-100 w-3/4 bg-opacity-10 rounded-md h-3/4 pt-15 p-10 flex flex-col justify-center gap-3'>

          <div>
            <h1 className='text-3xl pb-5 font-extrabold text-yellow-400'> Log <span className='text-blue-400'> in</span> </h1>
          </div>
         <p className ={`text-xs text-red-600 ${emptyUser}`}>Please Enter User ID</p>
        <input 
        className='rounded-sm p-2 text w-full'
        placeholder='User'
        type ='text'
        value ={user}
        onChange={(e)=>setUser(e.target.value)}
         />
        <input 
        className='rounded-sm p-2 text w-full' 
        placeholder='Passward' 
        type='password'
        value ={pwd}
        onChange={(e)=>setPwd(e.target.value)}
        />
         <p className ={`text-xs text-red-600 ${emptyPwd} `}>Please Enter Password</p>
        <div className='flex w-full justify-end pt-10'>
        <button
        onClick={login}
        className='bg-blue-500 p-2 w-3/5 rounded-md text-white font-semibold'>Sign in</button>
        </div>
        
        <div className='mt-20 text-center'>
          <p className ='text-center text-white font-extralight text-xs w-full italic '>Copyrights&copy;   reserved by</p>
        <p className ='text-center text-white font-extralight text-xs w-full '>  <span className='font-bold '> NHMP Training College</span>  <span className='italic'> IT Wing.</span></p>
        </div>
        </div>
       </div>
      
    </div>
    </div>
  )
  
}
