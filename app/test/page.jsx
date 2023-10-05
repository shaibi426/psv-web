 const test = () => {
  return (
    <div className=" p-4 h-screen ">
      <div className ="bg-slate-800 w- 2/6 h-2/5 rounded-t-3xl   relative ">
      <div className ="bg-slate-300 w-1/12 h-14 absolute left-0 bottom-0  "></div>
      <div className ="bg-slate-800 w-1/12 h-14 absolute left-0  bottom-0 rounded-bl-full "></div>
        
      </div>
      
      <div className ="bg-slate-300 w- 2/6 h-3/5 relative rounded-b-3xl ">
      <div className ="bg-slate-800 w-1/12 h-14 absolute right-0   "></div>
      <div className ="bg-slate-300 w-1/12 h-14 absolute right-0  rounded-tr-full "></div>
      </div>
    </div>
  );
};
export default test