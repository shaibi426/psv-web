'use client'
import React from 'react'

const Pdfpicker = (props) => {


  const handleDocchange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        props.setter(reader.result)
        // props.setter(Buffer.from(reader.result,'base64'));
   
            };
      reader.readAsDataURL(file);
    }
  };
 

 
  return (
    <div className='bg-white m-1 rounded-md w-full shadow shadow-slate-500'>
    <div className={`w-full rounded-md  p-1 m-1 flex flex-col text-sm font-sans items-center gap-2 font-semibold justify-between`}>
        <label className='text-xs w-11/12 bg-blue-400 p-2 rounded-md flex itens-center justify-center' htmlFor='name'> {props.label}</label>
        <input maxLength={500} spellCheck= {true} type = 'file'  onChange={handleDocchange}  accept='.pdf' className='p-2 bg-white   w-11/12 font-normal focus:outline-0 border rounded-md ml-2 border-slate-400 focus:border-blue-400 mr-3 focus:border focus:rounded-md '  />
    </div>

    </div>
  )
}

export default Pdfpicker