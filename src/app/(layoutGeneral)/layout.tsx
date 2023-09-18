import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { LayoutGeneral } from "@/shared/layouts";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutGeneral>{children}</LayoutGeneral>
      </body>
    </html>
  );
}
