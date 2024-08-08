// "use client"
// import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { BellIcon } from "lucide-react";
// type Props = {};

// export default function AdminNotification({}: Props) {
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <BellIcon className=" cursor-pointer" />
//       </PopoverTrigger>
//       <PopoverContent className="w-80 p-0">
//         <Command>
//           <CommandInput placeholder="Search Notifications" />
//           <CommandList>
//             <CommandEmpty>No results found.</CommandEmpty>
//             <CommandGroup heading="Recent Notifications">
//               <CommandItem>
//                 <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
//                 <span>Lorem ipsum dolor sit amet.</span>
//               </CommandItem>
//               <CommandItem>
//                 <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
//                 <span>Lorem ipsum dolor sit amet consectetur.</span>
//               </CommandItem>
//               <CommandItem>
//                 <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
//                 <span>Lorem ipsum dolor sit amet.</span>
//               </CommandItem>
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }