import AvgComp from "./AvgComp";
import PointComp from "./pointComp";


const WrapperComp = () => {
    return (
        <div>
            <PointComp />
            <AvgComp />
        </div>
    )
}
export default WrapperComp;
