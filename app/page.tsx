

import Image from 'next/image'
import MainBck from '../public/2.jpg'
import logo from './components/assests/PMP LOGO.png'



export default function Home() {

  return (
    <div className="bg-[#051532]">
      <div className=' w-full flex flex-row  gap-2 items-center justify-stretch pl-10 pt-5'>
      <Image src={logo}  alt="logo" width={80} height ={80} 
       />
       <h1 className=' font-extrabold text-3xl text-white font-prompt '>PSVs Management System (MIS-PSV)</h1>
        </div>
    <div className=" h-screen flex justify-between items-center">
      <div className ='flex items-start pt-10 h-full w-2/4 justify-center'>
      <Image src={MainBck}  alt="main page background" className=''
       />
       </div>
       <div className ="w-2/5 h-full pb-10 flex items-start ">
        <div className='bg-blue-100 w-3/4 bg-opacity-10 rounded-md  h-4/6 p-10 flex flex-col justify-center gap-3'>

          <div>
            <h1 className='text-3xl pb-5 font-extrabold text-yellow-400'> Log <span className='text-blue-400'> in</span> </h1>
          </div>
         
        <input className='rounded-sm p-2 text w-full' placeholder='User' type ='text'/>
        <input className='rounded-sm p-2 text w-full' placeholder='Passward' type='password'/>
        <div className='flex w-full justify-end pt-10'>
        <button className='bg-blue-500 p-2 w-3/5 rounded-md'>Sign in</button>
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
// width={50} height={50}