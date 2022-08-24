import { useEffect } from "react";
import { useState } from "react"
import MyFirstCalculator from "./MyFirstCalculator";

const MyFirstComponent = (props) => {
  const {birthDate, IDNumber, firstNumber, secondNumber} = props; 
  const firstName = useState("Ameer");
  const lastName = useState("Salah");
  const address = useState("Ramallah");
  const [favColorsList] = useState(["black", "green"]);
  const [show, setShow] = useState(true);

  const [sum, setSum] = useState(0)

  useEffect(()=>{
    console.log("ID number was changed");
  }, [IDNumber])

  useEffect(()=>{
    setSum(parseInt(firstNumber) + parseInt(secondNumber));
  }, [firstNumber])

  return (
    <div>
        <h1>Sum is {sum}</h1>
        <h1>{firstName} {lastName}</h1>
        <p>{address}</p>
        <div>{favColorsList.map(item => 
            <div><h2>{item}</h2></div>
        )}</div>
        <button onClick={() => {setShow(!show)}}>Toggle</button>
        {/* {show && <MyFirstCalculator />} */}
    </div>
  )
}

export default MyFirstComponent;