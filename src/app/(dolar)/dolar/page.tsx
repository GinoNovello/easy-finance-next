import { dolarBlueData, dolarMep, dolarOficialData } from "@/api/dolarapi";
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

export default async function DolarPage() {
  const oficialData: DolarResponse = await dolarOficialData();
  const blueData: DolarResponse = await dolarBlueData();
  const mepData: DolarResponse = await dolarMep();

  const dataArray: DolarResponse[] = [oficialData, blueData, mepData];

  return (
    <div className="flex justify-between gap-7">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3 rounded-tl-md">Dolar</TableHead>
            <TableHead className="w-1/3">Compra</TableHead>
            <TableHead className="w-1/3 rounded-tr-md">Venta</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataArray.map((dolar, index) => (
            <TableRow key={index} className="even:bg-primary/5">
              <TableCell
                className={cn(
                  "text-gray-300 text-ellipsis",
                  index === dataArray.length - 1 ? "rounded-bl-md" : ""
                )}
              >
                {dolar.nombre}
              </TableCell>
              <TableCell className="font-bold text-ellipsis">
                ${dolar.compra}
              </TableCell>
              <TableCell
                className={cn(
                  "font-bold text-ellipsis",
                  index === dataArray.length - 1 ? "rounded-br-md" : ""
                )}
              >
                ${dolar.venta}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
