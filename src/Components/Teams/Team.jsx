import { useParams } from "react-router-dom";
import UseProtectedRoute from "../ProtectedRoute";

const Team = () => {
  let params = useParams();
  return <h1>Member {params.teamId}</h1>;
};

// export default UseProtectedRoute(Team)
export default Team