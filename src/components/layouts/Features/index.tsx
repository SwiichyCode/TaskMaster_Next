import React from "react";
import { SectionWrapper } from "@/components/wrappers/SectionWrapper";
import { TitleGradient } from "@/components/global/TitleGradient";
import { FeaturesCard } from "@/components/layouts/Features/FeaturesCard";
import { items } from "./data";
import * as S from "./styles";

export const Features = () => {
  return (
    <SectionWrapper>
      <S.Container>
        <S.HeaderWrapper>
          <TitleGradient
            as="h2"
            text="Powerful features to help you manage all your leads"
          />
          <p>
            Apsum dolor sit amet consectetur. Aliquam elementum elementum in
            ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet
            vel.
          </p>
        </S.HeaderWrapper>
        <S.FeaturesWrapper>
          {items.map(({ src, title, description }, index) => (
            <FeaturesCard
              key={index}
              src={src}
              title={title}
              description={description}
            />
          ))}
        </S.FeaturesWrapper>
      </S.Container>
    </SectionWrapper>
  );
};
