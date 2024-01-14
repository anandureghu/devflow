import React from "react";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      HomePage
      <UserButton afterSignOutUrl="/">Sign in</UserButton>
    </div>
  );
};

export default Home;
