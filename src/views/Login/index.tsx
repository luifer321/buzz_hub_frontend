"use client";
import Image from "next/image";
import { BiSolidUser } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import { Button } from "@/components/atoms/Button";
import TextField from "@/components/atoms/TexField";

const LoginView = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-2 bg-slate-900 rounded-lg px-12 pt-7 pb-12">
        <div className="flex items-center justify-center gap-2">
          <Image src="/logo-name.png" width={90} height={90} alt="logo"></Image>
        </div>
        <hr className="mb-4 border-slate-700" />
        <TextField
          type="text"
          placeholder="Usuario"
          icon={<BiSolidUser />}
          size="lg"
        />
        <TextField
          type="password"
          placeholder="Contraseña"
          icon={<AiFillLock />}
          size="lg"
        />
        <Button text="Sign In" size="md" width="full" color="slate80" />
      </div>
    </div>
  );
};

export default LoginView;
