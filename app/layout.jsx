import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Comeet",
  description: "Come and meet your mates",
  keywords: "review, coffee, restaurant, place, meet",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <>{children}</>
      </body>
    </html>
  );
};

export default MainLayout;
