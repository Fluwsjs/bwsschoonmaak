"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import { NavbarBWS } from "@/components/HeroBWS";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Use NavbarBWS on home page, Header on other pages
  if (pathname === "/") {
    return <NavbarBWS />;
  }
  
  return <Header />;
}

