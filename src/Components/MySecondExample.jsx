import { useEffect, useState } from "react"

const MySecondExample = (props) => {
  const [name, setName] = useState("");
  
  useEffect(()=>{
    document.title = `My name is  ${name}`;
  })

  return (
    <div>
        <h1>Example to understand how useEffect work</h1>
        <input value={name} onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value)}} />
    </div>
  )
}

export default MySecondExample;