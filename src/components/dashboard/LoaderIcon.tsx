"use client";
import { Loader } from "lucide-react";

export default function LoaderIcon() {
  return (
    <div className=" animate-spin mx-2">
      <Loader size={15} />
    </div>
  );
}
