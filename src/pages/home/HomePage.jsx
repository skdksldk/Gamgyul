import React from "react";

import MainLayout from "../../components/MainLayout";
import Blogs from "./container/Blogs";
import CTA from "./container/CTA";
import Hero from "./container/Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Blogs />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
