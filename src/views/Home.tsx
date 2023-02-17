import React from "react";
import { HomeWrapper } from "@/components/wrappers/HomeWrapper";
import { Header } from "@/components/layouts/Header";
import { Hero } from "@/components/layouts/Hero";
import { MainWrapper } from "@/components/wrappers/MainWrapper";

export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <MainWrapper>
        <Hero />
      </MainWrapper>
    </HomeWrapper>
  );
};
