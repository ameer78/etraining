import React, { Component, useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

const AvgComp = () => {
    // const points = useContext(AppContext);
    const {name, points} = useContext(AppContext);
    const [avg, setAvg] = useState(0);
    useEffect(()=>{
      if(points && points.length > 0){
          let sum = points.reduce((prev, next) => prev+next);
          setAvg(sum/points.length)
      }
    }, [points])
  return (<div>
    <h2>Your Name is  {name}</h2>
    <h2>Your Average  is  {avg}</h2>
  </div>);
};

export default AvgComp;
