import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Cta from "../../Home/Cta";
import { supabase } from "@/lib/supabase";
import parse from "html-react-parser";
async function fetchData(id: any) {
  try {
    const { data, error, status } = await supabase
      .from("Blogs")
      .select()
      .eq("slug", id)
      .single();

    if (error) {
      console.error("Failed to fetch product:", error.message);
      return {};
    }

    if (status === 200 && data) {
      return data || {};
    }
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params?.id;
  const blog = await fetchData(slug);

  if (!blog) {
    // Handle the case where the blog data is not found
    return {
      title: "Blog not found",
      openGraph: {
        images: [],
      },
    };
  }

  const blogTitle = blog.Title || "Opus-404";
  const blogDescription = blog.Intro || "No such blog";
  const blogImage = blog.Image || "";

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${blogTitle} | Blog | Opus Mannpower Service`,
    description: blogDescription,
    openGraph: {
      title: `${blogTitle}`,
      description: blogDescription,
      images: [blogImage, ...previousImages],
    },
  };
}

export default async function Page({ params }: any) {
  const blog: any = await fetchData(params.id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main className="">
      <div className="lg:w-9/12 w-11/12 mx-auto  lg:pt-24 pt-20">
        <h1 className="font-extrabold lg:text-3xl md:text-3xl uppercase text-2xl md:text-left tracking-wide">
          {blog.Title}
        </h1>
        <p className="font-medium md:text-lg text-[12px] pt-8 ">{blog.Intro}</p>
        <Image
          src={blog.Image}
          alt={blog.Title}
          width={1000}
          height={1000}
          className=" max-h-[65vh] w-full object-cover mx-auto rounded-2xl my-6"
        />
       <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-cente gap-2">
          <Image
            src="/avatar.jpg"
            alt="avatar"
            width={1000}
            height={1000}
            className=" h-12 w-12 rounded-full"
          />
          <div>
            <p className="font-semibold md:text-base text-sm">John Doe</p>
            <p className="font-medium md:text-base text-xs">Marketting Officer</p>
          </div>
        </div>

        <p className="font-semibold md:text-base text-xs">{blog?.created_at?.slice(0, 10)}</p>

       </div>
        <div className="font-medium  md:text-lg text-[12px] md:py-6 py-2">
          {blog.Description && parse(blog.Description)}
        </div>
      </div>
      <Cta />
    </main>
  );
}
