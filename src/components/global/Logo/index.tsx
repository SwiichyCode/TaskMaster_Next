import React from "react";
import Image from "next/image";
import imgLogo from "@/assets/logo.svg";

export const Logo = () => (
  <Image src={imgLogo} alt="logo" width={147} height={34} />
);
