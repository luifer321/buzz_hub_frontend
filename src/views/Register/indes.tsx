import Link from "next/link";
import Image from "next/image";
import TextField from "@/components/atoms/TexField";
import { DataPicker } from "@/components/atoms/DataPicker";
import { Button } from "@/components/atoms/Button";

const RegisterView = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-2 bg-slate-900 rounded-lg px-8 py-5 max-sm:px-6 max-sm:w-80">
        <div className="flex items-center justify-center">
          <Image src="/logo-name.png" width={90} height={90} alt="logo"></Image>
        </div>
        <hr className="mb-1 border-slate-700" />
        <h1 className="mb-1 flex justify-center text-md font-light	">
          Create your account
        </h1>
        <div className="flex gap-2 max-sm:flex-col">
          <TextField type="text" placeholder="Name" color="slate60" />
          <TextField type="text" placeholder="Email" color="slate60" />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <TextField type="password" placeholder="Password" color="slate60" />
          <TextField
            type="password"
            placeholder="Confirm Password"
            color="slate60"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <DataPicker size="lg" width="full" />
          <Button text="Create Account" width="full" size="lg" />
        </div>
        <Link href="/login" className="text-white text-sm font-light pl-3">
          Have account ? Sign in!
        </Link>
      </div>
    </div>
  );
};

export default RegisterView;
