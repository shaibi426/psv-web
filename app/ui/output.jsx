import React from 'react'

const Output = (props) => {
  return (
    <div className='bg-white m-1 rounded-md w-full shadow shadow-slate-500'>
    <div className={`w-full rounded-md  p-1 m-1 flex  text-sm font-sans items-center gap-2 font-semibold justify-between`}>
        <label className='text-xs w-3/12 bg-gray-300 p-2 rounded-md' htmlFor='name'> {props.label}</label>
        <output   className='p-1 bg-white  px-1 w-8/12 font-normal focus:outline-0' >{props.value}</output>
    </div>

    </div>
  )
}

export default Output

