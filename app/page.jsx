import React from "react";
import ExploreCard from "@/components/ExploreCard";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-4xl p-4">Explore</div>
      <div className="flex justify-center">
        <ExploreCard />
      </div>
    </div>
  );
};

export default HomePage;
