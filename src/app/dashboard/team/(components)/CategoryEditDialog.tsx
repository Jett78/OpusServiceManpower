"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ReloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import DialogTriggerAction from "@/components/dashboard/DialogTriggerAction";
import ButtonActionLoader from "@/components/dashboard/ButtonActionLoader";
import { supabase } from "@/lib/supabase";
import useCloudinaryFileUpload from "@/hooks/Cloudnery";

type Props = {
  id: number;
  setRefreshNow: React.Dispatch<React.SetStateAction<boolean>>;
};

const formSchema = z.object({
  Name: z
    .string()
    .min(2, {
      message: "Name must be between 2-20 characters.",
    })
    .max(20, {
      message: "Name must be between 2-20 characters.",
    }),
  Position: z
    .string().optional(),
  Message: z
    .string().optional(),

  Image: z.string().optional(),
});

export default function CategoryEditDialog({ id, setRefreshNow }: Props) {
  const [imageUrl, setImageUrl] = useState<string>("");

  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Position: "",
      Message: "",
      Image: "",
    },
  });

  const [isFetching, setIsFetching] = useState<boolean>(false);
  //   const [category, setCategory] = useState<ICategoryOut | undefined>(undefined);
  const [category, setCategory] = useState<any>(undefined);
  useEffect(() => {
    const fetch = async () => {
      setIsFetching(true);
      const { data, error, status } = await supabase.from("Team").select().eq("id", id).single();

      if (error) {
        console.error("Failed to fetch team:", error.message);
        setIsFetching(false);
        return;
      }

      if (status === 200 && data) {
        setCategory(data);
        setIsFetching(false);
      }
    };

    fetch();
  }, [id]);

  useEffect(() => {
    if (category) {
      form.reset({
        Name: category.Name || "",
        Position: category.Position || "",
        Message: category.Message || "",
        Image: category.Image || "",
      });
    }
  }, [form, category]);

  // Define a submit handler
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsUpdating(true);
    const { data, error, status } = await supabase.from("Team").update(values).eq("id", id);

    if (error) {
      setIsUpdating(false);
      toast.error(error.details || "An error occurred during update. Please try again.");
      return;
    }

    if (status == 204) {
      setRefreshNow(true);
      form.reset();
      setIsUpdating(false);
      setImageUrl("");
      toast.success("Category updated successfully.");
      return;
    }
  };

  useEffect(() => {
    form.setValue("Image", imageUrl);
  }, [form, imageUrl]);
  const { uploading, handleFileUpload } = useCloudinaryFileUpload();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p>
          <DialogTriggerAction title="Edit Team" />
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Update Team</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when youre done.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form 
          onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className=" grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <Input
                      placeholder="Enter name"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position *</FormLabel>
                    <Input
                      placeholder="Enter position"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message *</FormLabel>
                    <Input
                      placeholder="Enter message"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Image 
                    </FormLabel>
                    <div className=" flex items-center  gap-2">
                      <Input
                        type="file"
                        // onChange={(event) => handleFileUpload(event.target.files?.[0], setImageUrl)}
                      />

                      <>
                        {false ? (
                          <div className=" flex flex-col gap-2 rounded-md items-center justify-center h-9 w-9 border">
                            <ButtonActionLoader />
                          </div>
                        ) : (
                          <Image
                            width={100}
                            height={100}
                            src={imageUrl}
                            alt="img"
                            className="p-0.5 rounded-md overflow-hidden h-9 w-9 border"
                          />
                        )}
                      </>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className=" flex justify-end mt-8">
              <Button
                type="submit"
                disabled={isUpdating}>
                {isUpdating && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                {isUpdating ? " Please wait" : " Update Team"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
