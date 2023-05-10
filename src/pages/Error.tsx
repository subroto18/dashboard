import React, { useEffect, useState } from "react";
import { useRouteError } from "react-router-dom";
import { ApiError } from "../utilis/errorInterfaces";
import { IErrorRoute } from "../models/IErrorRoute";

export const Error: React.FC = () => {
  let ErrorState: IErrorRoute = {
    status: 404,
    statusText: "",
    internal: false,
    data: "",
  };

  const errorCheck = (error: any): error is IErrorRoute => {
    return "data" in error && "status" in error && "statusText" in error;
  };

  const error: unknown = useRouteError();

  console.log(errorCheck(error));

  //   if()
  //   {
  //     (error as IErrorRoute)?.message || (error as { statusText?: string })?.statusText;
  //   }

  return <div>Error</div>;
};
