"use client";
import Link from "next/link";
import Image from "next/image";
import { BiSolidUser } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import { Button, TextField } from "@/components";

const LoginView = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-2 bg-slate-900 rounded-lg px-12 py-7 max-sm:px-6">
        <div className="flex items-center justify-center gap-2">
          <Image src="/logo-name.png" width={90} height={90} alt="logo"></Image>
        </div>
        <hr className="mb-4 border-slate-700" />
        <TextField
          type="text"
          placeholder="Usuario"
          icon={<BiSolidUser />}
          color="slate70"
        />
        <TextField
          type="password"
          placeholder="Contraseña"
          icon={<AiFillLock />}
          color="slate70"
        />
        <Button text="Sign In" width="full" color="slate80" />
        <Link href="/register" className="text-white text-sm font-light pl-3">
          No account? Create one!
        </Link>
      </div>
    </div>
  );
};

export default LoginView;
