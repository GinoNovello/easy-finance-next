import { dolarBlueData, dolarOficialData } from "@/api/dolarapi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DolarResponse } from "@/types/dolarapi/types";

export default async function DolarPage(){
        const oficialData: DolarResponse = await dolarOficialData();
        const blueData: DolarResponse = await dolarBlueData();

        const dataArray: DolarResponse[] = [oficialData, blueData]

       
        
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
                <TableRow key={index} className="hover:bg-green-200 bg-green-100">
                  <TableCell className={`text-black text-ellipsis ${index === dataArray.length -1 ? 'rounded-bl-md' : ''}`}>
                    {dolar.nombre}
                  </TableCell>
                  <TableCell className="font-bold text-ellipsis">
                    ${dolar.compra}
                  </TableCell>
                  <TableCell className={`font-bold text-ellipsis ${index === dataArray.length - 1 ? 'rounded-br-md' : ''}`}>
                    ${dolar.venta}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        );
 }