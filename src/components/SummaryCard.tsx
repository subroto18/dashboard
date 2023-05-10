import React from "react";
import { Card } from "primereact/card";

interface Props {
  title: string;
  num_of_count: number;
  month: string;
  backgroundColor: string;
  loading: boolean;
  apiError: boolean;
}

export const SummaryCard = ({
  title,
  num_of_count,
  month,
  backgroundColor,
  loading,
  apiError,
}: Props) => {
  return (
    <div className="card p-1 mt-4">
      {loading ? (
        <Card className={`${backgroundColor}  `}>
          <p className="m-0">Loading...</p>
        </Card>
      ) : apiError ? (
        <Card className={backgroundColor} title={title}>
          <p className="m-0">Something went wrong!</p>
        </Card>
      ) : (
        <Card className={backgroundColor} title={title}>
          <p className="m-0">{num_of_count}</p>
          <h6>{month}</h6>
        </Card>
      )}
    </div>
  );
};
