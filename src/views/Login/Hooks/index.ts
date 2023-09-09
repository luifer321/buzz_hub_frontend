import React, { useState } from "react";

const usePassword = () => {
  const [password, setPassword] = useState(false);
  const showPass = () => setPassword(!password);
};

export default usePassword;
