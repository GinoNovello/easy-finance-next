
import DolarPage from "../../(dolar)/dolar/page";
import googleApi from "@/api/googlesheet";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { cookies } from "next/headers";

export default async function DashboardPage() {
  const cookie = cookies();
  
  const sheetUrl = cookie.get("sheetUrl");
  const sheetName = cookie.get("sheetName");
  const data = sheetUrl ? await googleApi.transaccion.list(sheetUrl.value) : [];
  console.log(data)
  return (
    <>
      <h1 className="text-3xl font-semibold text-red-800">{sheetName?.value}</h1>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="py-20 flex">
        <DolarPage />
      </div>
    </>
  );
}
