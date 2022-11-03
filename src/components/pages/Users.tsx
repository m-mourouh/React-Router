import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === "active";
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
      <br />
      <button onClick={() => setSearchParams({filter: "active"})}>Active users</button>
      <button onClick={() => setSearchParams({})}>Reset filter</button>
      <br />
      <br />
      <p>
        {
            showActiveUsers ? "Showing active users" : "Showing all users"
        }
      </p>
    </div>
  );
};

export default Users;
