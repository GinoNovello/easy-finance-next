
import DolarPage from "../../(dolar)/dolar/page";
import googleApi from "@/api/googlesheet";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useSearchParams } from "next/navigation";

export default async function DashboardPage({ searchParams }: { searchParams: { url: string } }) {
  
  const url = searchParams.url;
  const data = url ? await googleApi.transaccion.list(url) : [];
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
