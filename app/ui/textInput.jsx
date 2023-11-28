'use client'
import React from 'react'

const Textinput = (props) => {
  return (
    <div className='bg-white m-1 rounded-md w-full shadow shadow-slate-500'>
    <div className={`w-full rounded-md  p-1 m-1 flex  text-sm font-sans items-center gap-2 font-semibold justify-between`}>
        <label className='text-xs w-3/12 bg-blue-400 p-2 rounded-md' htmlFor='name'> {props.label}</label>
        <input  type = 'text' value = {props.value} onChange={(e)=>props.setter(e.target.value)} className='p-1 bg-white  px-1 w-8/12 font-normal focus:outline-0 border-b border-slate-400 focus:border-blue-400 mr-3 focus:border focus:rounded-md pl-2'  />
    </div>

    </div>
  )
}

export default Textinput