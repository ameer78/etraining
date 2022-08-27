import React, { Component, useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

const PointsComp = () => {
  const {points, setPoints} = useContext(AppContext);
  const [addedPoint, setAddedPoint]= useState(0)
  const addPoint  = () => {
    setPoints([...points, parseInt(addedPoint)]);
  }
  useEffect(()=>{
    console.log(points)
  },[points])
  return <div>
    <ul>
        <input type="number" value={addedPoint} onInput={(e) => {setAddedPoint(e.target.value)}} placeholder="Add Point" />
        <button onClick={addPoint}>Add</button>
        {points && points.length > 0 && points.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>;
};

export default PointsComp;
