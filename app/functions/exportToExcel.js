import { downloadExcel } from "react-export-table-to-excel";

function handleDownloadExcel(reportName,data,header, startDate,endDate) {
    downloadExcel({
      fileName: `${reportName} Report`,
      sheet: `Date ${startDate} - ${endDate} `,
      tablePayload: {
        header,
        body: data,
      },
    });
  }

  export {handleDownloadExcel}
