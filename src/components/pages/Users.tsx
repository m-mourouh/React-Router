import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>List of users</h1>
      <br />
      <ul>
        <li><Link to="1">User 1</Link></li>
        <li><Link to="2">User 2</Link></li>
        <li><Link to="3">User 3</Link></li>
      </ul>
      <br />
      <Outlet/>
    </div>
  );
};

export default Users;
