import React from "react";
import WelcomeSection from "./WelcomeSection";
import ObjectivesSection from "./ObjectivesSection";
import AreaSection from "./AreaSection"; // Fix import path
import LeadersSection from "./LeadersSection"; // Fix import path
import ActivitiesSection from "./ActivitiesSection"; // Fix import path
import LatestNewsSection from "./LatestNewsSection"; // Fix import path
import AlertSection from "./AlertSection";

const Home = () => {
  return (
    <div className="p-4 space-y-8 container mx-auto">
      <WelcomeSection />
      <AlertSection />
      {/* <Carousel /> */}
      <ObjectivesSection />
      <AreaSection />
      <LeadersSection />
      <ActivitiesSection />
      <LatestNewsSection />
    </div>
  );
};

export default Home;
