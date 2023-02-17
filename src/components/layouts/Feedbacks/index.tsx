import React from "react";
import { SectionWrapper } from "@/components/wrappers/SectionWrapper";
import { TitleGradient } from "@/components/global/TitleGradient";
import * as S from "./styles";

export const Feedbacks = () => {
  return (
    <SectionWrapper>
      <S.Container>
        <S.Wrapper>
          <TitleGradient as="h2" text="What our client say" />
          <p>
            Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
            lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis
            urna sapien.
          </p>
        </S.Wrapper>
        <S.CardsWrapper></S.CardsWrapper>
      </S.Container>
    </SectionWrapper>
  );
};
