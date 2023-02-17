import React from "react";
import { HomeWrapper } from "@/components/wrappers/HomeWrapper";
import { Header } from "@/components/layouts/Header";
import { Hero } from "@/components/layouts/Hero";
import { MainWrapper } from "@/components/wrappers/MainWrapper";
import { Features } from "@/components/layouts/Features";

export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <MainWrapper>
        <Hero />
        <Features />
      </MainWrapper>
    </HomeWrapper>
  );
};
