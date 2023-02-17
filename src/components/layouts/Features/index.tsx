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
            text="Easy and effective features for seamless project management."
          />
          <p>
            Empower your project management with powerful features. Gain
            complete control over your tasks, ideas, and collaboration with
            easy-to-use tools.
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
