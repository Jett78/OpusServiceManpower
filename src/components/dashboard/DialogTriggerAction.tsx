"use client";
import React from "react";

type Props = {
  title: string;
  className?: string;
};

export default function DialogTriggerAction({ className, title }: Props) {
  return <span className={`${className} flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`}>{title}</span>;
}