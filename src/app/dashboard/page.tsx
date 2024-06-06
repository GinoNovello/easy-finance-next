import { HomeIcon, UserIcon, SettingsIcon } from "lucide-react";
import { Sidebar } from "../components/sidebar";
import { SidebarItem } from "../components/sidebaritems";
import DolarPage from "../(dolar)/dolar/page";
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

export default async function DashboardPage() {
  const finance = await googleApi.transaccion.list();
  console.log(finance);

  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<HomeIcon />} text="Home" active />
        <SidebarItem icon={<UserIcon />} text="Profile" />
        <SidebarItem icon={<SettingsIcon />} text="Settings" />
      </Sidebar>
      
      <main className="flex-1 p-4">

        <Table >
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
        {finance.map(({fecha, gasto, tipo})=>(

            <TableRow key={fecha}>
              <TableCell className="font-medium">{fecha}</TableCell>
              <TableCell>{tipo}</TableCell>
              <TableCell>...</TableCell>
              <TableCell className="text-right">$ {gasto}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
        

        <div className="py-20 flex">
        <DolarPage/>
        </div>
      </main>
    </div>
  );
}
