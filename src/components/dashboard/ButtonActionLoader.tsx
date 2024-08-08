"use client"
import { Loader } from "lucide-react";
import React from "react";

type Props = {
  size?: number;
};

export default function ButtonActionLoader({ size = 16 }: Props) {
  return (
    <Loader
      size={size}
      className="animate-spin mr-2"
    />
  );
}