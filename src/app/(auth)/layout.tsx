"use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { getCookie } from "cookies-next";
// import { COOKIE_NAME } from "@/constants/constants";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {

  return (
    <main>
      {children}
    </main>
  );
}
