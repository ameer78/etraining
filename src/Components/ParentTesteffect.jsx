import React, { useState } from "react";
import "./App.css"
import MyFirstComponent from "./MyFirstComponent";

const ParentTesteffect = () => {
  const [birthDate, setBirthDate] = useState("12.10")
  const [IDNumber, setIDNumber] = useState("123123423412");

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);



    // Call the props from originalComponent
    return <div>
      {/* <h1>{this.props.show}</h1> 
      <button onClick={this.props.handleClick}>Increase</button> */}
      <label for="birth-date">Birth Date</label>
      <input id="birth-date" value={birthDate} onInput={(e) => setBirthDate(e.target.value)} />
      <br />
      <label for="IDNumber">ID Number</label>
      <input id="IDNumber" value={IDNumber} onInput={(e) => setIDNumber(e.target.value)} />

      <div>
        <label for="first-number">First Number</label>
        <input id="first-number" value={firstNumber} onInput={(e) => setFirstNumber(e.target.value)} />
        <br />
        <label for="second-number">Second Number</label>
        <input id="second-number" value={secondNumber} onInput={(e) => setSecondNumber(e.target.value)} />
      </div>

      <MyFirstComponent secondNumber={secondNumber} firstNumber={firstNumber} IDNumber={IDNumber} birthDate={birthDate} />
      {/* <MySecondExample /> */}
      {/* <MyFirstCalculator /> */}
    </div>
}
   

export default ParentTesteffect;