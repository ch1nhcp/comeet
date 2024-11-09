import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/NavBar";
import Providers from "./Providers";

export const metadata = {
  title: "Comeet",
  description: "Come and meet your mates",
  keywords: "review, coffee, restaurant, place, meet",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default MainLayout;
