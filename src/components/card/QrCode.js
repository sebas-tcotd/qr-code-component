import React from "react";
import qrImage from "./image-qr-code.png";

export const QrCode = () => {
  return <img src={qrImage} alt="QR code" className="c-card__head" />;
};
