
import DolarPage from "../../(dolar)/dolar/page";
import googleApi from "@/api/googlesheet";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { cookies } from "next/headers";

export default async function DashboardPage() {
  const cookie = cookies();
  
  const url = cookie.get("sheet");
  const data = url ? await googleApi.transaccion.list(url.value) : [];
  console.log(data)
  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="py-20 flex">
        <DolarPage />
      </div>
    </>
  );
}
