import { useParams } from "react-router-dom";


const User = () => {
    let params = useParams();
    return <h1>user member {params.userid}</h1>;
};
export default User;
