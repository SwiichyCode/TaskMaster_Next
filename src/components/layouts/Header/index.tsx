import React from "react";
import { Logo } from "@/components/global/Logo";
import { Navbar } from "@/components/layouts/Navbar";
import { Button } from "@/components/global/Button";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Logo />
        <Navbar />
        <S.BtnWrapper>
          <Button text="Login" theme="primary" />
        </S.BtnWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
