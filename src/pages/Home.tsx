import React from "react";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
export const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Dashboard></Dashboard>
    </>
  );
};
