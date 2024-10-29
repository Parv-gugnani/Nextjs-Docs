"use client";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center">Page Not Found</h1>
      <Image src="/cat.gif" width={100} height={100} alt="error image" />
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}
