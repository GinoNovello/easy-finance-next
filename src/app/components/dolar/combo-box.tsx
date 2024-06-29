// "use client"

// import { ChevronsUpDown } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//     Command,
//     CommandEmpty,
//     CommandGroup,
//     CommandInput,
//     CommandItem,
//     CommandList,
// } from "@/components/ui/command"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover"
// import { usePathname, useRouter, useSearchParams } from "next/navigation"
// import { useEffect, useState } from "react"

// interface Props {

// }

// export function Combobox({}) {
//   const [open, setOpen] = useState(false)

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between"
//         >
//             {country
//             ? frameworks.find((framework) => framework.value === country)?.label
//             : "Seleccionar país..."}
//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0">
//         <Command>
//           <CommandInput placeholder="Buscar país..." />
//           <CommandList>
//             <CommandEmpty>País no soportado.</CommandEmpty>
//             <CommandGroup>
//               {frameworks.map((framework) => (
//                 <CommandItem
//                   key={framework.value}
//                   value={framework.value}
//                   onSelect={(currentValue) => {
//                     setCountry(currentValue)
//                     setOpen(false)
//                   }}
//                 >
//                   {framework.label}
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   )
// }
