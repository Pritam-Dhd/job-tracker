"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import links from "../../utils/links";
import { Button } from "./ui/button";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="px-8 py-4 bg-muted h-full">
      <Image src={Logo} alt="logo" className="mx-auto max-w-40" />
      <div className="flex flex-col gap-y-3 mt-20">
        {links.map((link) => (
          <Button
            asChild
            key={link.href}
            variant={pathname === link.href ? "default" : "link"}
            className="w-full text-left"
          >
            <Link href={link.href} className="flex items-center gap-x-2">
              {link.icon} <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
