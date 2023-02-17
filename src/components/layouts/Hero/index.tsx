import Image from "next/image";
import React from "react";
import { Button } from "@/components/global/Button";
import { SectionWrapper } from "@/components/wrappers/SectionWrapper";
import { TitleGradient } from "@/components/global/TitleGradient";
import { useTranslation } from "react-i18next";
import imgHero from "@/assets/hero.svg";
import * as S from "./styles";

export const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <SectionWrapper>
      <S.Container>
        <S.Wrapper>
          <TitleGradient
            as="h1"
            text="Simplify Your Workflow with Task Master"
          />
          <p>
            Enhance your project management with Task Master. Invite
            collaborators, centralize your ideas, and improve your work
            efficiency.
          </p>
          <S.ButtonWrapper>
            <Button text="Start now" theme="primary" />
          </S.ButtonWrapper>
        </S.Wrapper>
        <Image src={imgHero} width={808} height={513} alt="hero" />
      </S.Container>
    </SectionWrapper>
  );
};
