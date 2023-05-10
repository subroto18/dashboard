import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { LOGO } from "../utilis/helper";

export const Header = () => {
  const items: MenuItem[] = [
    {
      label: "HOME",
    },
    {
      label: "COMPANY",
    },
    {
      label: "RPA",
    },
    {
      label: "IOTIF",
    },
    {
      label: "IIOF SOLUTIONS",
    },
    {
      label: "SENSA",
    },
    {
      label: "CONTACT US",
    },
  ];

  const start = <img alt="logo" src={LOGO} height="40" className="mr-2"></img>;

  return (
    <div className="bg-blue-400">
      <Menubar
        className="flex justify-content-between border-noround bg-white p-5"
        model={items}
        start={start}
      />
    </div>
  );
};
