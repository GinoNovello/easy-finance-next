"use client";

import { GoogleSheetResponse } from "@/types/googlesheet/types";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EditGastoModal from "@/app/components/edit-gasto-modal";
import { useState } from "react";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<GoogleSheetResponse>[] = [
  {
    accessorKey: "fecha",
    header: () => <div className="text-left">Fecha</div>,
    cell: ({ row }) => {
      const fechaStr = row.getValue("fecha");

      if (typeof fechaStr === "string") {
        // Split the date string into day, month, and year
        // const [day, month, year] = fechaStr.split("/").map(Number);

        // Create a Date object using the components
        // const fecha = new Date(year, month, day);
        // console.log(fecha);
        // // Format the date using Intl.DateTimeFormat
        // const formatted = new Intl.DateTimeFormat("es-ES", {
        //   dateStyle: "short",
        // }).format(fecha);

        return <div className="text-left font-medium">{fechaStr}</div>;
      }

      return <div className="text-left font-medium">Invalid date</div>;
    },
  },
  {
    accessorKey: "tipo",
    header: () => <div className="text-right">Tipo</div>,
    cell: ({ row }) => {
      const tipo = (row.getValue("tipo") as string).trim().toLowerCase();

      // Formatear el tipo de transferencia basado en el valor
      let formatted;
      switch (tipo) {
        case "tarjeta":
          formatted = "Tarjeta";
          break;
        case "efectivo":
          formatted = "Efectivo";
          break;
        case "transferencia":
          formatted = "Transferencia";
          break;
        case "cheque":
          formatted = "Cheque";
          break;
        case "depósito":
          formatted = "Depósito";
          break;
        case "deposito":
          formatted = "Depósito";
          break;
        // Puedes añadir más casos aquí si tienes más tipos de transferencia
        default:
          formatted = "Desconocido";
      }

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "gasto",
    header: () => <div className="text-right">Gasto</div>,
    cell: ({ row }) => {
      const gasto = parseFloat(row.getValue("gasto"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(gasto);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;
      // const [isEditModalOpen, setIsEditModalOpen] = useState(false);

      // const handleSave = async (newGasto: number) => {
      //   try {
      //     // Lógica para actualizar el gasto en Google Sheets
      //     await fetch("/api/updateGasto", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         id: payment,
      //         newGasto,
      //       }),
      //     });
      //     // Actualiza la UI o haz otra lógica necesaria aquí
      //   } catch (error) {
      //     console.error("Error updating gasto:", error);
      //   }
      // };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(payment.gasto.toString())
                }
              >
                Copiar el gasto
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => alert("Editar gasto")}>
                Editar gasto
              </DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <EditGastoModal
            isOpen={isEditModalOpen}
            onOpenChange={setIsEditModalOpen}
            gasto={payment.gasto}
            onSave={handleSave}
          /> */}
        </>
      );
    },
  },
];
