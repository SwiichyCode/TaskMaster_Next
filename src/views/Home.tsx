import React from "react";
import styled from "styled-components";
import { HomeWrapper } from "@/components/wrappers/HomeWrapper";
import { Header } from "@/components/layouts/Header";
import { Hero } from "@/components/layouts/Hero";
import { MainWrapper } from "@/components/wrappers/MainWrapper";
import { Features } from "@/components/layouts/Features";
import { Feedbacks } from "@/components/layouts/Feedbacks";

const Container = styled.div`
  width: 200px;
  height: 200px;
`;

export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <MainWrapper>
        <Hero />
        <Features />
        <Feedbacks />
      </MainWrapper>
    </HomeWrapper>
  );
};
