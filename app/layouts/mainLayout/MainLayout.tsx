"use client";

import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Footer } from "./component/Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  return (
    <>
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};

export default MainLayout;
