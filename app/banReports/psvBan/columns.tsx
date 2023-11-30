
//------------------------------------------------------Report headers
import { ColumnDef} from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type rptCol = {
  psvNo:string
  orderNo:string
  issuedBy: string
  startDate:string
  endDate:string
  office:string
  banReason:string
  orderpdf:string 
  firpdf:string
  }


export const columns: ColumnDef<rptCol>[] = [
  {
   
    accessorKey:"psvNo",
    header: "Vehicle #",
  },
  {
    accessorKey: "orderNo",
    header: "Order #",
  },
      {
        accessorKey: "issuedBy",
        header: "Issued By",
      },
      {
        accessorKey: "startDate",
        header: "Ban Starts from",
        cell: ({ row }) => {
          const date:string = (row.getValue("startDate"))
          return <div className=" font-medium">
            {date.split('T')[0].split('-').reverse().join('-')}
            </div>}
      },
      {
        accessorKey: "endDate",
        header: "Ban Ends On",
        cell: ({ row }) => {
          const date:string = (row.getValue("endDate"))
          return <div className=" font-medium">
            {date.split('T')[0].split('-').reverse().join('-')}
            </div>}
      },
      {
        id: "orders",
        header: "Order's Copy",
        cell: ({ row }) => {

          const document = row.original

//===========================================================================================order      
          return (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button  className="bg-blue-500 p-2 rounded-md hover:bg-slate-800 text-white" >
                Orders
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='border-black p-0 border-collapse justify-center items-center flex w-[750px] '>
            <object type="application/pdf" data={'data:application/pdf;base64,'+ document.orderpdf} width="100%" height='320pt' className='bg-green-400'></object>
            </DropdownMenuContent>
            </DropdownMenu>
          )
        },

      },
      {
        id: "firs",
        header: "FIR's Copy",
        cell: ({ row }) => {
          const document = row.original  
//===================================================================================================     
          return (
            <DropdownMenu>
            <DropdownMenuTrigger asChild >
              <button  className="bg-blue-500 p-2 px-5 rounded-md hover:bg-slate-800 text-white" >
                FIR
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='border-black p-0 border-collapse justify-center items-center flex w-[750px] '>
            <object type="application/pdf" data={'data:application/pdf;base64,'+ document.firpdf} width="100%" height='320pt' />
            </DropdownMenuContent>
            </DropdownMenu>
          )
        }, 
      },  
]



