"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import Footer from "./Footer";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link className="mb-12 cursor-pointer items-center gap-2 flex" href="/">
          <Image
            src="/icons/logo.svg"
            alt="Horizon logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              className={cn("mobilenav-sheet_close w-full", {
                "bg-bank-gradient": isActive,
              })}
              href={item.route}
              key={item.label}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                height={20}
                width={20}
                className={cn({
                  "brightness-[3] invert-0": isActive,
                })}
              />

              <p
                className={cn("text-16 font-semibold text-black-2", {
                  "!text-white": isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
      <Footer user={user} type="mobile" />
    </section>
  );
};

export default Sidebar;
