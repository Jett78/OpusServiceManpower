// "use client";
// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { ReloadIcon } from "@radix-ui/react-icons";

// import { supabase } from "@/utils/something/supabase/supabaseClient";
// import DialogTriggerAction from "@/components/dashboard/DialogTriggerAction";

// type Props = {
//   id: number;
//   setRefreshNow: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const formSchema = z.object({
//   name: z
//     .string()
//     .min(2, {
//       message: "Name must be between 2-20 characters.",
//     })
//     .max(20, {
//       message: "Name must be between 2-20 characters.",
//     }),

//   diopter: z.number().min(1, {
//     message: "Diopter is required.",
//   }),

//   price: z.number().min(1, {
//     message: "Price is required.",
//   }),
// });

// export default function MessageEditDialog({ id, setRefreshNow }: Props) {
//   // Define your form
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       diopter: 0,
//       price: 0,
//     },
//   });

//   const [isFetching, setIsFetching] = useState<boolean>(false);
//   const [lense, setLense] = useState<any>(undefined);
//   useEffect(() => {
//     const fetch = async () => {
//       setIsFetching(true);
//       const { data, error, status } = await supabase.from("Lense").select().eq("id", id).single();

//       if (error) {
//         console.error("Failed to fetch lense:", error.message);
//         setIsFetching(false);
//         return;
//       }

//       if (status === 200 && data) {
//         setLense(data);
//         setIsFetching(false);
//       }
//     };

//     fetch();
//   }, [id]);

//   useEffect(() => {
//     if (lense) {
//       form.reset({
//         name: lense.name || "",
//         price: lense.price || 0,
//         diopter: lense.diopter || 0,
//       });
//     }
//   }, [form, lense]);

//   // Define a submit handler
//   const [isUpdating, setIsUpdating] = useState<boolean>(false);
//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     setIsUpdating(true);
//     const { data, error, status } = await supabase.from("Lense").update(values).eq("id", id);

//     if (error) {
//       setIsUpdating(false);
//       toast.error(error.details || "An error occurred during update. Please try again.");
//       return;
//     }

//     if (status == 204) {
//       setRefreshNow(true);
//       form.reset();
//       setIsUpdating(false);
//       toast.success("Lense updated successfully.");
//       return;
//     }
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <p>
//           <DialogTriggerAction title="Edit lense" />
//         </p>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[725px]">
//         <DialogHeader>
//           <DialogTitle>Update lense</DialogTitle>
//           <DialogDescription>Make changes to your profile here. Click save when youre done.</DialogDescription>
//         </DialogHeader>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)}>
//             <div className=" ">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Lense Name *</FormLabel>
//                     <Input
//                       placeholder="Lense name"
//                       {...field}
//                     />
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="diopter"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Diopter *</FormLabel>
//                     <Input
//                       type="number"
//                       placeholder="Enter Diopter"
//                       {...field}
//                     />
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="price"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Price *</FormLabel>
//                     <Input
//                       type="number"
//                       placeholder="Enter price"
//                       {...field}
//                     />
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <div className=" flex justify-end mt-8">
//               <Button
//                 type="submit"
//                 disabled={isUpdating}>
//                 {isUpdating && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
//                 {isUpdating ? " Please wait" : " Update Lense"}
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   );
// }


import React from 'react'

export default function MessageEditDialog() {
  return (
    <div>MessageEditDialog</div>
  )
}
