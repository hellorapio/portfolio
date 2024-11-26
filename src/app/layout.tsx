import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Hi, I'm Abdelrahman",
  description: "I'm a software engineer and a full-stack developer.",
};

const mono = JetBrains_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mono.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
