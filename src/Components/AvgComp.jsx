
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

const AvgComp = () => {
    const {name,points} = useContext(AppContext);
    const [avg, setAvg] = useState(0)

    useEffect(() => {
        let sum = points.reduce((prev, next) => prev + next);
        setAvg(
            sum / points.length
        )
    },[points])
    return (
        <div>

            <h2> your name IS {name}</h2>
            <h2> your AVG IS {avg}</h2>
        </div>
    )
}
export default AvgComp;