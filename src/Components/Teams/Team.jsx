import { useParams } from "react-router-dom";

const Team = () => {
  let params = useParams();
  return <h1>Member {params.teamId}</h1>;
};

export default Team