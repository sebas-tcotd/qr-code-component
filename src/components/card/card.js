import React from "react";
import { CardBody } from "./CardBody";
import { QrCode } from "./QrCode";

export const Card = () => {
  return (
    <div className="c-card">
      <QrCode />
      <CardBody />
    </div>
  );
};
