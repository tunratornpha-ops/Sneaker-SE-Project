import React from "react";
import HeroSection from "../components/herosection.tsx";
import Promote from "../components/promote.tsx";
import Bestseller from "../components/bestseller.tsx";
import Niko from "../components/Niko.tsx";
import Newarrivals from "../components/Newarrivals.tsx";
import Shipping from "../components/Shipping.tsx";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <Promote />
      <Bestseller />
      <Niko />
      <Newarrivals />
      <Shipping />
    </div>
  );
};

export default Home;