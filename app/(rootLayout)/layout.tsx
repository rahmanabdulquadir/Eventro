import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col ">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
