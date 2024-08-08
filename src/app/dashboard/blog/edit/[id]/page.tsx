"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ReloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import ButtonActionLoader from "@/components/dashboard/ButtonActionLoader";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import "react-quill/dist/quill.snow.css";
import { Textarea } from "@/components/ui/textarea";
import ReactQuill from "react-quill";

const formSchema = z.object({
  Title: z
    .string()
    .min(2, {
      message: "Name must be between 2-20 characters.",
    }),
  Description: z.string().optional(),
  Intro: z.string().optional(),

  Image: z.string().optional(),
});
function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}
const modules = {
  // syntax: true,
  toolbar: [["bold", "italic", "underline"], [{ list: "ordered" }], ["clean"]],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
export default function Page() {
  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Title: "",
      Description: "",
      Intro: "",
      Image: "",
    },
  });

  const params = useParams();
  const id = params.id;

  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [product, setProduct] = useState<any>(undefined);
  useEffect(() => {
    const fetch = async () => {
      setIsFetching(true);
      const { data, error, status } = await supabase
        .from("Blogs")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error("Failed to fetch product:", error.message);
        setIsFetching(false);
        return;
      }

      if (status === 200 && data) {
        setProduct(data);
        setIsFetching(false);
      }
    };

    fetch();
  }, [id]);

  console.log(product);

  useEffect(() => {
    if (product) {
      form.reset({
        Title: product.Title || "",
        Intro: product.Intro || "",
        Description: product.Description || "",
        Image: product.Image || "",
      });
    }
  }, [form, product]);

  const [imageUrl1, setImageUrl1] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsUpdating(true);
    const { data, error, status } = await supabase
      .from("Blogs")
      .update({...values,slug:generateSlug(values.Title)})
      .eq("id", id)
      .single();
    if (error) {
      setIsUpdating(false);
      toast.error(
        error.details || "An error occurred during update. Please try again."
      );
      return;
    }

    if (status == 204) {
      // form.reset();
      setIsUpdating(false);
      setProduct(data);
      toast.success("Blog updated successfully.");
      return;
    }
  };

  useEffect(() => {
    form.setValue("Image", imageUrl1);
  }, [form, imageUrl1]);
  // const { uploading, handleFileUpload } = useCloudinaryFileUpload();

  return (
    <div className=" p-8 shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="Image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <div className=" flex items-center  gap-2">
                    <Input
                      type="file"
                      // onChange={(event) => handleFileUpload(event.target.files?.[0], setImageUrl1)}
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
                          src={imageUrl1}
                          alt="img"
                          className="p-0.5 rounded-md overflow-hidden h-9 w-9 border"
                        />
                      )}
                    </>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title *</FormLabel>
                  <Input placeholder="Enter title" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="Intro"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Intro *</FormLabel>
                    <Textarea
                      className="resize-none min-h-28"
                      placeholder="Enter Intro"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="Description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description *</FormLabel>
                    <ReactQuill
                      id="Content"
                      theme="snow"
                      formats={["bold", "italic", "underline", "list"]}
                      placeholder="Remote closing refers to the process of completing sales transactions and finalizing deals without the necessity for face-to-face interaction..."
                      modules={modules}
                      className={`col-span-4 resize-none mb-24 mix-h-40 max-h-auto`}
                      style={{ marginBottom: "40px" }}
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className=" flex justify-end mt-8">
            <Button type="submit" disabled={isUpdating}>
              {isUpdating && (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isUpdating ? " Please wait" : " Update Blog"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
