"use client";
import { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import TextField from "@/components/atoms/TexField";
import { Button } from "@/components/atoms/Button";

const LoginView = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2">
        <TextField type="text" placeholder="Usuario" icon={<BiSolidUser />} />
        <TextField
          type="password"
          placeholder="Contraseña"
          icon={<AiFillLock />}
        />
        <Button placeholder="Login" text="Login" size="lg" />
      </div>
    </div>
  );
};

export default LoginView;
