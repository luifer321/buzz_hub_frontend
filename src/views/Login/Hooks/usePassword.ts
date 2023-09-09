import { useState } from "react";

export const usePassword = () => {
  const [password, setPassword] = useState(false);
  const showPass = () => setPassword(!password);

  return { password, showPass };
};
