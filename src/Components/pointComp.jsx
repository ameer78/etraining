
import { useContext, useState } from "react";
import { AppContext } from "../App";


const PointComp = () => {
    const { points, setPoint } = useContext(AppContext);
    const [addedPoint, setAddedPoint] = useState(0);
    const addPoint = () => {
        setPoint([...points, parseInt(addedPoint)]);
    }

    return (
        <div>

            <input type="number" value={addedPoint} onInput={(e) => setAddedPoint(e.target.value)}    placeholder="Add number" />
            <button onClick={addPoint}>Add</button>
            <ul>
                {points && points.length > 0 && points.map(item => <li> {item}</li>)}
            </ul>
        </div>
    )
}
export default PointComp;
