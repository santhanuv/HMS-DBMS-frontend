import React from "react";
import Card from "../Card";
import { FaExclamationCircle } from "react-icons/fa";

function EmptyCard({ children }) {
  return (
    <Card classNames="flex flex-col justify-center items-center w-full h-full gap-5">
      <h1 className="font-montserrat text-4xl font-bold">{children}</h1>
      <FaExclamationCircle className="font-montserrat text-6xl" />
    </Card>
  );
}

export default EmptyCard;
