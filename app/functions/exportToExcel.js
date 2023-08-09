import { downloadExcel } from "react-export-table-to-excel";

function handleDownloadExcel(reportName,data,header, startDate,endDate) {
    downloadExcel({
      fileName: `${reportName} Report`,
      sheet: `From ${startDate} to ${endDate}`,
      tablePayload: {
        header,
        body: data,
      },
    });
  }

  export {handleDownloadExcel}
