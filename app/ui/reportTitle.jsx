
import React from 'react';



function ReportTitle(props) {
    return (
        <div className='w-full h-10 bg-gray-400 text-black text-center font-bold text-xl flex items-center justify-center'>
            {`${props.name} Report`}      
        </div>
    );
}

export default ReportTitle;