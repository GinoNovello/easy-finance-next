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

export default async function DashboardPage() {
  const finance = await googleApi.transaccion.list();
  console.log(finance);

  return (
    <>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Fecha</TableHead>
            <TableHead>Método</TableHead>
            <TableHead>...</TableHead>
            <TableHead className="text-right">Monto</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {finance.map(({ fecha, gasto, tipo }, index) => (
            <TableRow
              key={fecha}
              className={cn(
                index % 2 === 0
                  ? "bg-gray-200 hover:bg-gray-300"
                  : "bg-gray-100 hover:bg-gray-100/15"
              )}
            >
              <TableCell className="font-medium">{fecha}</TableCell>
              <TableCell>{tipo}</TableCell>
              <TableCell>...</TableCell>
              <TableCell className="text-right">$ {gasto}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="py-20 flex">
        <DolarPage />
      </div>
    </>
  );
}
