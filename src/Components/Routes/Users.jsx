import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "nadeem" },
  { id: 2, name: "saleh" },
  { id: 3, name: "ameer" },
];

const Users = () => {
  return users.map((item) => (
    <div key={item.id}>
      <Link to={`/users/${item.id}`}> {item.name}</Link>
    </div>
  ));
};
export default Users;
