import DolarPage from "../../(dolar)/dolar/page";
import googleApi from "@/api/googlesheet";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default async function DashboardPage() {
  const data = await googleApi.transaccion.list();
  console.log(data);

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
