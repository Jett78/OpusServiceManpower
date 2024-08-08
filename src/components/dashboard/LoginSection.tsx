"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
// import { supabase } from "@/utils/something/supabase/supabaseClient";
import LoaderIcon from "./LoaderIcon";
import logo from "../../public/logo1.png";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().min(10, {
    message: "Email be at least 10 characters.",
  }),

  password: z.string().min(5, {
    message: "Password be at least 5 characters.",
  }),
});

export default function LoginSection() {
  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Define a submit handler
  const [isLoging, setIsLoging] = useState<boolean>(false);
  const handleFileUpload = async (file: any) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "gsakcrgh");
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dxeipcp9u/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        return data.url;
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image");
        return null;
      }
    }
  };
// const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     setIsLoging(true);
//     const { data, error } = await supabase.auth.signInWithPassword(values);

//     if (error) {
//       console.error("Login failed:", error.message);
//       toast.error(error.message || "Something went wrong. Please try again.");
//       setIsLoging(false);
//       return;
//     }

//     if (data) {
//       form.reset();
//       setIsLoging(false);
//       toast.success("Login successful.");
//       return;
//     }
//   };

  return (
    <section className=" h-screen flex items-center justify-center">
      <Card className=" p-8  ">
        <Form {...form}>
          <form
            // onSubmit={form.handleSubmit(onSubmit)}
            className="w-[350px]">
            <div className=" space-y-4 ">
              <div className="grid gap-2 text-center ">
                <Image
                  src={logo}
                  alt="logo"
                  className=" h-20 w-20 object-scale-down mx-auto"
                />
                <p className="text-balance text-muted-foreground">Login as Admin</p>
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email </FormLabel>
                    <Input
                      {...field}
                      placeholder="johndoe@gmail.com"
                    />
                    <FormMessage {...field} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel>Password</FormLabel>
                      {/* <Link
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm underline">
                        Forgot your password?
                      </Link> */}
                    </div>
                    <Input
                      {...field}
                      placeholder="*******"
                    />
                    <FormMessage {...field} />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full">
                {isLoging && <LoaderIcon />}
                Login
              </Button>

              {/* <Button
                onClick={loginWithGoogle}
                variant="outline"
                className="w-full">
                Login with Google
              </Button> */}

              {/* <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href="#"
                  className="underline">
                  Sign up
                </Link>
              </div> */}
            </div>
          </form>
        </Form>
      </Card>
    </section>
  );
}
