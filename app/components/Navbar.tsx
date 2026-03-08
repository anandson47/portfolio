"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center p-6 border-b border-neutral-800">
      <Link href="/" className="text-xl font-bold">
        My Portfolio
      </Link>

      <div className="hidden md:flex gap-8 pb-3">
        <Link href="/projects">Projects</Link>
        <Link href="/fitness">Fitness</Link>
        <Link href="/cricket">Cricket</Link>
        <Link href="/content">Content</Link>
        <Link href="/about">About</Link>
        <Link href="/admin">Admin</Link>
      </div>

      {
        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      }

      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-black">
          <div className="flex flex-col px-4 py-4 gap-4">
            <Link href="/projects">Projects</Link>
            <Link href="/fitness">Fitness</Link>
            <Link href="/cricket">Cricket</Link>
            <Link href="/content">Content</Link>
            <Link href="/about">About</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
