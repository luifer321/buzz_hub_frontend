import "./globals.css";
import LoginView from "@/views/Login";
import { Inter } from "next/font/google";
import Sidebar from "@/components/organisms/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container m-auto flex flex-row min-h-screen">
          <header className="w-64">
            <Sidebar />
          </header>
          <main className="flex flex-1 flex-row">
            <div className="content">
              {children}
              <LoginView />
            </div>
            <div className="w-64"></div>
          </main>
        </div>
      </body>
    </html>
  );
}
