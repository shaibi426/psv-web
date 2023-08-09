import React from 'react';


function ReportButton(props) {

    

    //------------------------------ function to download excel report
    

    return (
        <div className="flex justify-start gap-4 flex-row px-10 py-2 bg-slate-500">
        <button className="rounded-md bg-blue-300 w-1/12"> Print</button>
        <button className="rounded-md bg-red-300 w-1/12"> Save as PDF</button>
        <button className="rounded-md bg-green-300 w-2/12" onClick={props.excelExport}>
          Export to Excel
        </button>
      </div>
    );
}

export default ReportButton;