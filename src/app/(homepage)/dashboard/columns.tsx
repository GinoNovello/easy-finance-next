"use client";

import { GoogleSheetResponse } from "@/types/googlesheet/types";
import { ColumnDef } from "@tanstack/react-table";

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
];
