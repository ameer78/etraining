import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addTeam} from "../../slices/teams"
import UseProtectedRoute from "../ProtectedRoute";

const Teams = () => {
  const { teams } = useSelector((state) => state.teams);
  const [memberName, setMemberName] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      Team member NAME: <input value={memberName}  onInput={(e)=>setMemberName(e.target.value)} className="p-2" />
      <Button onClick={() => dispatch(addTeam({id: "a" + Math.random(), name: memberName}))} >Add</Button>
      {teams.map((item) => (
        <div key={item.id}>
          <Link to={`/teams/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Teams;
