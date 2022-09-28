import React from "react";
import { CardBody } from "./CardBody";
import { QrCode } from "./qr-code";

export const Card = () => {
  return (
    <div className="card">
      <QrCode />
      <CardBody />
    </div>
  );
};
