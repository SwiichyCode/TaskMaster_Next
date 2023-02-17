import React from "react";
import { SectionWrapper } from "@/components/wrappers/SectionWrapper";
import { TitleGradient } from "@/components/global/TitleGradient";
import * as S from "./styles";

export const Feedbacks = () => {
  return (
    <SectionWrapper>
      <S.Container>
        <TitleGradient as="h2" text="What our client say" />
      </S.Container>
    </SectionWrapper>
  );
};
