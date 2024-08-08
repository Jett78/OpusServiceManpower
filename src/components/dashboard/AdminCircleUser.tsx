// "use client";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Bell, TriangleAlert } from "lucide-react";
// import { Button } from "../ui/button";
// import { Howl } from "howler";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { useEffect, useState } from "react";
// import notificationSound from "@/public/discord.mp3";
// import { Badge } from "../ui/badge";
// import { supabase } from "@/app/dashboard/admin/utils/supabase";
//  function AdminCircleUser() {
//   const [message, setMessage] = useState<any>([]);
//   const [badge, setBadge] = useState<number>(0);
//   const handleInserts = async () => {
//     let { data: Notification, error } = await supabase
//       .from("Notification")
//       .select("*")
//       .contains("Users", [`28`])
//       .order("created_at", { ascending: true });
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Message:", Notification);
//       setMessage(Notification);
//       if (Notification!?.length > 0) {
//         let notiCount: any = 0;
//         for (var i = 0; i < Notification!?.length; i++) {
//           if (
//             Notification![i].Seen !== null &&
//             !Notification![i].Seen.includes("28")
//           ) {
//             notiCount++;
//             notificationPlay()
//           } else if (Notification![i].Seen == null) {
//             notiCount++;
//           }
//         }
//         setBadge(notiCount);
//       } else {
//         setBadge(0);
//       }
//       // setBadge(Notification.length);
//     }
//   };
//   const handleSeen = async () => {
//     if (message.length > 0) {
//       const user = "28";
//       for (var i = 0; i < message?.length; i++) {
//         if (message[i]?.Seen == null) {
//           let { data, error } = await supabase
//             .from("Notification")
//             .update({
//               Seen: [String(user)],
//             })
//             .eq("id", Number(message[i].id));
//           if (data) {
//             console.log(data);
//           }
//         } else if (
//           message[i].Seen !== null &&
//           !message[i]?.Seen?.includes(String(user))
//         ) {
//           let { data, error } = await supabase
//             .from("Notification")
//             .update({
//               Seen: [...message[i].Seen, String(user)],
//             })
//             .eq("id", Number(message[i].id));
//           if (data) {
//             console.log(data);
//           }
//         }
//       }
//     }
//   };
//   const notificationPlay = () => {
//     const sound = new Howl({
//       src: [notificationSound], // Use the imported sound file
//       autoplay: false,
//     });
//     sound.play();
//   };
//   useEffect(() => {
//     handleInserts();
//   }, []);

//   supabase
//     .channel("custom-all-changes")
//     .on(
//       "postgres_changes",
//       { event: "*", schema: "public", table: "Notification" },
//       (payload: any) => {
//         console.log(payload);
//         if (Object.values(payload.new).length === 0) {
//           console.log(payload.old);
//           handleInserts();
//         } else {
//           const newData = payload.new;
//           const user = "28";
//           if (newData.Users.length !== 0 && newData.Users.includes(user)) {
//             console.log("New message:", payload.new);
//             if (payload.eventType == "INSERT") {
//               setBadge((prev) => prev + 1);
//               notificationPlay();
//             }
//             handleInserts();
//           }
//         }
//       }
//     )
//     .subscribe();
//   return (
//     <div>
//       <DropdownMenu>
//         <DropdownMenuTrigger  className="ring-0 focus-visible:outline-none">
//           {" "}
//           <div
//             // variant={"ghost"}
//             className="hover:bg-transparent relative hover:text-slate-600 focus-visible:ring-white"
//           >
//             <Bell size={26} />
//             {badge > 0 && (
//               <Badge className=" absolute top-0 left-4 bg-red-500 rounded-full w-4 h-4 p-1 text-[10px]">
//                 {badge}
//               </Badge>
//             )}
//           </div>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="w-[450px] pb-2 mr-8">
//           <DropdownMenuLabel className="text-center text-md">
//             Notification
//           </DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           {message?.map((mes: any, i: number) => (
//             <DropdownMenuCheckboxItem
//               key={i}
//               onMouseEnter={handleSeen}
//               className={`gap-4 pb-2 pl-3`}
//             >
//               <Avatar className="h-10 w-10">
//                 <AvatarImage
//                   src="/logo/logo.png"
//                   className="object-contain bg-primary p-1"
//                 />
//                 <AvatarFallback>WebX</AvatarFallback>
//               </Avatar>
//               <div>
//                 <h2 className="text-md font-bold flex gap-1 items-center">
//                   WebX{" "}
//                   <TriangleAlert
//                     className={`${
//                       mes.Type == "Important"
//                         ? "text-red-600"
//                         : mes.Type == "Normal"
//                         ? "text-yellow-500"
//                         : "text-black"
//                     }`}
//                     size={16}
//                   />
//                 </h2>
//                 <p className="text-sm">{mes.Message}</p>
//               </div>
//             </DropdownMenuCheckboxItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }

// export default AdminCircleUser;