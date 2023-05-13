"use client";
import Section1 from "@/components/HomePage/Section1";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="">
      <Section1 />
    </div>
  );
}
