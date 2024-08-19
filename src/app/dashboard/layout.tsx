"use client";
import {
  Group,
  Home,
  Inbox,
  Info,
  LayoutDashboard,
  ListOrdered,
  LogOut,
  Newspaper,
  Shapes,
  User2,
  Users,
} from "lucide-react";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { SessionContext } from "../context/SessionContext";
// import { supabase } from "@/utils/something/supabase/supabaseClient";
import { toast } from "sonner";
import LoginSection from "@/components/dashboard/LoginSection";
import { Separator } from "@/components/ui/separator";
// import AdminCircleUser from "@/components/dashboard/AdminCircleUser";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SessionContext } from "./context/SessionContext";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import logo from "../../../public/logo.jpg";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { session } = useContext(SessionContext);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Login failed:", error.message);
      toast.error(
        error.message || "Something went wrong. Please logout again."
      );
      return;
    }

    if (!error) {
      toast.success("Logout successful.");
      return;
    }
  };

  if (!session || session == null) {
    return (
      <html>
        <body>
          <LoginSection />
        </body>
      </html>
    );
  }
  console.log(session);
  if (session) {
    return (
      <html>
        <body>
          <div className=" flex ">
            <Toaster />
            <div className=" border-r flex flex-col justify-between h-screen w-2/12 bg-primary-foreground  bg-primary-500 ">
              <div>
                <Image
                  src={logo}
                  alt="logo"
                  className=" h-20 w-40 object-cover mx-auto"
                />
                {/* <h1 className=" text-2xl px-6 font-semibold tracking-wider py-2 ">
                  Opus
                </h1>
                <Separator /> */}

                <div className=" space-y-2 pt-4">
                  {navItems.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex flex-col hover:bg-secondary "
                    >
                      <Link
                        href={item.href}
                        className={`link ${
                          pathname === item.href
                            ? "bg-secondary text-white"
                            : ""
                        }  py-1.5 px-6 hover:text-secondary-950 duration-100   opacity-95 flex items-center gap-1  `}
                      >
                        {item.icon} {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div
                onClick={handleLogout}
                className="cursor-pointer  absolute bottom-0 mb-4  tracking-wider  flex gap-2 items-center   py-3 px-3  "
              >
                <LogOut size={18} />
                Logout
              </div>
            </div>

            <div className="h-screen overflow-y-scroll w-full">
              <div className="  flex items-center justify-between  h-12 px-4 shadow-md z-50">
                <Button className=" opacity-0" variant="outline"></Button>
                <div className=" flex items-center gap-4 "></div>
              </div>
              <div className=" px-4 mt-8 ">{children}</div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

const navItems = [
  {
    name: "Overview",
    icon: <LayoutDashboard size={15} />,
    href: "/dashboard",
    isTriggerDisable: true,
  },
  {
    name: "Blogs",
    icon: <Newspaper size={16} />,
    href: "/dashboard/blog",
  },
  {
    name: "About",
    icon: <Info />,
    href: "/dashboard/about",
    isTriggerDisable: true,
  },
  {
    name: "Team",
    icon: <Group />,
    href: "/dashboard/team",
    isTriggerDisable: true,
  },
  {
    name: "Testimonial",
    icon: <Users />,
    href: "/dashboard/testimonial",
    isTriggerDisable: true,
  },

  {
    name: "Contact",
    icon: <Inbox size={16} />,
    href: "/dashboard/contact",
  },
];

function IconLense(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className=" h-5 w-5">
      <path d="M3 10c-.24 0-.45.09-.59.25-.14.15-.2.37-.17.61l.5 2.99C2.82 14.5 3.4 15 4 15h3c.64 0 1.36-.56 1.5-1.18l1.06-3.19c.04-.13.01-.32-.06-.44-.11-.12-.28-.19-.5-.19H3m4 7H4C2.38 17 .96 15.74.76 14.14l-.5-2.99C.15 10.3.39 9.5.91 8.92 1.43 8.34 2.19 8 3 8h6c.83 0 1.58.35 2.06.96.11.15.21.31.29.49.43-.09.87-.09 1.29 0 .08-.18.18-.34.3-.49C13.41 8.35 14.16 8 15 8h6c.81 0 1.57.34 2.09.92.51.58.75 1.38.65 2.19l-.51 3.07C23.04 15.74 21.61 17 20 17h-3c-1.56 0-3.08-1.19-3.46-2.7l-.9-2.71c-.38-.28-.91-.28-1.29 0l-.92 2.78C10.07 15.82 8.56 17 7 17m8-7c-.22 0-.39.07-.5.19-.08.12-.1.31-.05.51l1.01 3.05c.18.69.9 1.25 1.54 1.25h3c.59 0 1.18-.5 1.25-1.11l.51-3.07c.03-.2-.03-.42-.17-.57A.769.769 0 0021 10h-6z" />
    </svg>
  );
}

function IconProduct(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      className=" h-5 w-5"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M8 4H6L3 14M16 4h2l3 10M10 16h4M21 16.5a3.5 3.5 0 01-7 0V14h7v2.5M10 16.5a3.5 3.5 0 01-7 0V14h7v2.5" />
    </svg>
  );
}

function IconFrame(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 21 21" fill="currentColor" className=" h-5 w-5">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.5 4v14M14.5 4v14M3.5 7h14M3.5 15h14" />
      </g>
    </svg>
  );
}

function IconBrand(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className=" h-4 w-4">
      <path d="M0 23.291h19.601v-2.978H2.98V3.689h16.626V14.6h-1.422l2.908 2.909L24 14.599h-1.417V.709H0v22.582zm16.148-9.935a3.028 3.028 0 00-1.653-1.58 4.013 4.013 0 00-.916-.254 1.72 1.72 0 00.735-.296c.241-.161.455-.364.647-.609.192-.247.345-.535.458-.863.115-.33.171-.686.171-1.069 0-.648-.126-1.186-.377-1.617a2.858 2.858 0 00-1.033-1.033 4.614 4.614 0 00-1.536-.547 10.311 10.311 0 00-1.868-.162c-.754 0-1.382.018-1.887.054-.502.037-.945.083-1.329.145v12.933c.684.083 1.293.141 1.834.171.539.03 1.082.044 1.634.044a12.6 12.6 0 002.057-.162 5.022 5.022 0 001.723-.592c.499-.288.893-.68 1.187-1.177.294-.498.441-1.135.441-1.914 0-.575-.096-1.065-.288-1.472zm-5.983-6.035c.91-.111 1.873-.054 2.301.304.38.317.607.599.607 1.42 0 .751-.357 1.195-.608 1.356-.251.161-.59.368-1.403.368h-.897V7.321zm3.029 8.68c-.449.39-1.114.552-1.816.552-.79 0-1.213-.072-1.213-.072v-3.737h1.132c.711 0 1.438.126 1.832.464.509.437.611.895.611 1.505.001.609-.212.998-.546 1.288z" />
    </svg>
  );
}
