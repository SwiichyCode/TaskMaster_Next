import React, { Fragment } from "react";
import { ThemesProvider } from "@/providers/ThemesProvider";
import { StoreProvider } from "@/providers/StoreProvider";

export const CombinedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StoreProvider>
      <ThemesProvider>{children}</ThemesProvider>
    </StoreProvider>
  );
};
