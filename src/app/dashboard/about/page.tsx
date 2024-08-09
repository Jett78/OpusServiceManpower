"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { CirclePlus, CircleX, Trash2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

function Page() {
  const inputRef = useRef<any>(null);
  const fileRef = useRef<any>(null);
  const certRef = useRef<any>(null);
  const [images, setImages] = useState<string[]>([]);
  const [pictures, setPictures] = useState<string[]>([]);
  const [certificate, setCertificate] = useState<string[]>([]);

  const handleFileUpload = async (file: any) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "opusManpower2");
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dgjuuo5ds/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        return data.url;
      } catch (error) {
        console.error("Error uploading image:", error);
        // toast.error("Error uploading image");
        return null;
      }
    }
  };

  const handleRemove = async (url: string) => {
    const { error } = await supabase.from("CompanyImg").delete().eq("url", url);
    if (error) {
      console.log("Error");
    } else {
      toast.success("Deleted successfully !");
      getImage();
    }
  };
  const handleRemoveCert = async (url: string) => {
    const { error } = await supabase.from("Certificate").delete().eq("url", url);
    if (error) {
      console.log("Error");
    } else {
      toast.success("Deleted successfully !");
      getCert();
    }
  };
  const handleRemoveImage = async (url: string) => {
    const { error } = await supabase.from("CountryImg").delete().eq("url", url);
    if (error) {
      console.log("Error");
    } else {
      toast.success("Deleted successfully !");
      getImages();
    }
  };

  const getCert = async () => {
    let { data: sliderImg, error } = await supabase
      .from("Certificate")
      .select("url,id");
    if (error) {
      console.log("Error");
    } else {
      const urls: string[] = [];
      for (const item of sliderImg!) {
        urls.push(item.url);
      }

      console.log(urls);
      setCertificate(urls);
    }
  };
  const getImage = async () => {
    let { data: sliderImg, error } = await supabase
      .from("CompanyImg")
      .select("url,id");
    if (error) {
      console.log("Error");
    } else {
      const urls: string[] = [];
      for (const item of sliderImg!) {
        urls.push(item.url);
      }

      console.log(urls);
      setPictures(urls);
    }
  };

  const getImages = async () => {
    let { data: images, error } = await supabase
      .from("CountryImg")
      .select("url,id");
    if (error) {
      console.log("Error");
    } else {
      const urlImg: string[] = [];
      for (const item of images!) {
        urlImg.push(item.url);
      }

      console.log(urlImg);
      setImages(urlImg);
    }
  };

  useEffect(() => {
    getImage();
    getImages();
    getCert();
  }, []);

  // Function to handle the file selection
  const handleFileCert = async () => {
    const files = certRef.current.files;
    if (files) {
      const upload = await handleFileUpload(files[0]);
      const { data, error } = await supabase
        .from("Certificate")
        .insert([{ url: upload }])
        .select();
      if (error) {
        console.log("Error");
      } else {
        console.log(data);
        toast.success("Added successfully !");
        getCert();
      }
    }
  };
  const handleFileSelect = async () => {
    const files = inputRef.current.files;
    if (files) {
      const upload = await handleFileUpload(files[0]);
      const { data, error } = await supabase
        .from("CompanyImg")
        .insert([{ url: upload }])
        .select();
      if (error) {
        console.log("Error");
      } else {
        console.log(data);
        toast.success("Added successfully !");
        getImage();
      }
    }
  };
  const handleSelect = async () => {
    const files = fileRef.current.files;
    if (files) {
      const upload = await handleFileUpload(files[0]);
      const { data, error } = await supabase
        .from("CountryImg")
        .insert([{ url: upload }])
        .select();
      if (error) {
        console.log("Error");
      } else {
        toast.success("Added successfully !");
        console.log(data);
        getImages();
      }
    }
  };

  return (
    <div className="rounded-lg border p-4 m-4">
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl lg:text-2xl text-slate-700 ">
            Company Image
          </h2>
          <div className="">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              ref={inputRef}
              style={{ display: "none" }} // Hide the input element
            />
            <Button
              onClick={() => inputRef.current.click()}
              className="px-2  border bg-secondary hover:bg-secondary hover:bg-opacity-80 text-white flex gap-1 rounded-md col-span-1"
            >
              <CirclePlus /> Upload
            </Button>
          </div>
        </div>
        <div className="min-h-[150px] max-h-auto content-center mt-1">
          {pictures.map((picture, index) => (
            <div
              key={index}
              style={{ display: "inline-block", marginRight: "10px" }}
              className="bg-secondary bg-opacity-40 rounded-md mt-3"
            >
              <img
                src={picture}
                alt={`Preview ${index + 1}`}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <button
                onClick={() => handleRemove(picture)}
                className="mx-auto flex items-center text-sm hover:text-red-500 rounded-md"
              >
                Delete <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl lg:text-2xl text-slate-700 ">Country Image</h2>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleSelect}
              ref={fileRef}
              style={{ display: "none" }} // Hide the input element
            />
            <Button
              onClick={() => fileRef.current.click()}
              className="px-2  border flex gap-1 rounded-md  bg-secondary hover:bg-secondary hover:bg-opacity-80 text-white col-span-1"
            >
              <CirclePlus /> Upload
            </Button>
          </div>
        </div>
        <div className="min-h-[150px] max-h-auto content-center mt-1">
          {images.map((picture, index) => (
            <div
              key={index}
              style={{ display: "inline-block", marginRight: "10px" }}
              className="rounded-md bg-secondary bg-opacity-40 mt-3"
            >
              <img
                src={picture}
                alt={`Preview ${index + 1}`}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <button
                onClick={() => handleRemoveImage(picture)}
                className="mx-auto flex items-center text-sm hover:text-red-500 rounded-md"
              >
                Delete
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl lg:text-2xl text-slate-700 ">Certificate Image</h2>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileCert}
              ref={certRef}
              style={{ display: "none" }} // Hide the input element
            />
            <Button
              onClick={() => certRef.current.click()}
              className="px-2  border flex gap-1 rounded-md  bg-secondary hover:bg-secondary hover:bg-opacity-80 text-white col-span-1"
            >
              <CirclePlus /> Upload
            </Button>
          </div>
        </div>
        <div className="min-h-[150px] max-h-auto content-center mt-1">
          {certificate?.map((picture, index) => (
            <div
              key={index}
              style={{ display: "inline-block", marginRight: "10px" }}
              className="rounded-md bg-secondary bg-opacity-40 mt-3"
            >
              <img
                src={picture}
                alt={`Preview ${index + 1}`}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <button
                onClick={() => handleRemoveCert(picture)}
                className="mx-auto flex items-center text-sm hover:text-red-500 rounded-md"
              >
                Delete
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
