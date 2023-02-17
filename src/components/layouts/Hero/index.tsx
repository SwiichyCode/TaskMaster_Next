import Image from "next/image";
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
          <TitleGradient as="h1" text={t("app_title")} />
          <p>{t("app_subtitle")}</p>
          <S.ButtonWrapper>
            <Button text="Start now" theme="primary" />
          </S.ButtonWrapper>
        </S.Wrapper>
        <Image src={imgHero} width={808} height={513} alt="hero" />
      </S.Container>
    </SectionWrapper>
  );
};
