import { Payment, columns } from './colume'
import { DataTable } from "./table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "2",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "3",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "4",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "5",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },{
      id: "6",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "succ1231231231231ess",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "proc3123131313123essing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "12",
      amount: 874,
      status: "123131312312312",
      email: "Silas22@gmail.com",
    },
    {
      id: "34",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },{
      id: "35",
      amount: 316,
      status: "suc312313cess",
      email: "ken99@yahoo.com",
    },
    {
      id: "36",
      amount: 242,
      status: "suc4412412cess",
      email: "Abe45@gmail.com",
    },
    {
      id: "37",
      amount: 837,
      status: "proceerrfsdfdserwrwerssing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "38",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "39",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },{
      id: "56",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },{
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },{
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },
    
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10 w-10/12">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
