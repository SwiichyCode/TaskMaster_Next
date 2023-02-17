import React from "react";
import Image from "next/image";
import * as S from "./styles";

interface FeaturesCardProps {
  src?: string;
  title?: string;
  description?: string;
}

export const FeaturesCard = ({
  src = "",
  title,
  description,
}: FeaturesCardProps) => {
  return (
    <S.Container>
      <Image src={src} alt="" />
      <S.Wrapper>
        <h3>{title}</h3>
        <p>{description}</p>
      </S.Wrapper>
    </S.Container>
  );
};
