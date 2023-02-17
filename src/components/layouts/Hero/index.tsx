import { Button } from "@/components/global/Button";
import Image from "next/image";
import React from "react";
import imgHero from "@/assets/hero.svg";
import * as S from "./styles";
import { SectionWrapper } from "@/components/wrappers/SectionWrapper";

export const Hero = () => {
  return (
    <SectionWrapper>
      <S.Container>
        <S.Wrapper>
          <h1>A CRM DASHBOARD FOR ENGINEERING TEAMS</h1>
          <p>
            Rorem ipsum dolor sit amet consectetur. Gravida convallis orci
            ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet
            vitae orci ac penatibus consectetur.
          </p>
          <S.ButtonWrapper>
            <Button text="Get a demo" theme="primary" />
            <Button text="View pricing" theme="secondary" />
          </S.ButtonWrapper>
        </S.Wrapper>
        <Image src={imgHero} width={808} height={513} alt="hero" />
      </S.Container>
    </SectionWrapper>
  );
};
