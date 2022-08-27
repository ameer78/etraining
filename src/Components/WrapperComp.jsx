import React, { Component } from "react";
import AvgComp from "./AvgComp";
import PointsComp from "./PointsComp";
const WrapperComp = () => {
  return (
    <div>
      <PointsComp />
      <AvgComp />
    </div>
  );
};

export default WrapperComp;
