import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScoreKeeper",
  description: "Created by @Aryan0220",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-[100vh]">
        {children}
        <p className="bg-card py-2 absolute bottom-0 w-full text-center">Made by <Link className="text-indigo-400/80" href="https://github.com/Aryan0220">@Aryan0220</Link> </p>
      </body>
    </html>
  );
}
