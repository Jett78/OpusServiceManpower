"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import { supabase } from "@/lib/supabase";

export function Form() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error, status } = await supabase
      .from("Contact")
      .insert({ Name: `${fName} ${lName}`, Email: email, Message: message })
    if (error) {
      alert("Failed to send message, please try again later.");
      console.error("Failed to send message:", error.message);
      return;
    } else {
      alert("Sent Succesfully!");
      setFName("");
      setLName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className=" mx-auto  md:rounded-2xl  my-8 ">
      <h2 className=" font-bold lg:text-5xl md:text-4xl text-3xl text-black   ">
        Reach out to us
      </h2>
      <p className=" font-semibold text-sm py-4 max-w-[30em] text-black">
        Contact us to start a conversation about how we can empower your work
        force and enrich your future.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" type="text" value={fName} onChange={(e)=>setFName(e.target.value)} required/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" type="text" value={lName} onChange={(e)=>setLName(e.target.value)} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your Concern</Label>
          <Input
            id="twitterpassword"
            placeholder=""
            type="text"
            value={message} onChange={(e)=>setMessage(e.target.value)}
            className="cols={32} !rows={32}  "
          />
        </LabelInputContainer>
        {/* <button type="submit" className=" w-[140px] bg-black font-bold h-[45px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#CC1587] before:via-[#26538C] before:to-[#00AFF0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Send Message
          </button>     */}

        <button className="button-gradient">Send Message</button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
