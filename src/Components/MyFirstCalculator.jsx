import { useEffect, useState } from "react"

const MyFirstCalculator = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [sum, setSum] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(()=>{ 

        console.log("Mounted");
        const interval = setInterval(()=> {
            setCount(count + 1);
        }, 1000)

        return () => {
            // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
            console.log("Component unmounted!")
            clearInterval(interval);
        };
      
    })

    return(<div>
        <input type="number" value={firstNumber} onChange={(e)=>{setFirstNumber(e.currentTarget.value)}} />
        <br />
        <button onClick={() => {setSum(parseInt(firstNumber) + parseInt(secondNumber))}}>+</button>
        <br />
        <h2>{count}</h2>
        <input type="number" value={secondNumber} onChange={(e)=>{setSecondNumber(e.currentTarget.value)}} />
    </div>)
}

export default MyFirstCalculator;