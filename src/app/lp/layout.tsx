"use client";

import React from "react";
import SimpleHeader from "@/components/SimpleHeader";
import SimpleFooter from "@/components/SimpleFooter";

export default function ASectionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="overflow-hidden">
        <SimpleHeader />
        {children}
        <SimpleFooter />
      </div>
    </>
  );
}