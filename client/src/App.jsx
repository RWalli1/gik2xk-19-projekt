import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Gameshop</Link>
        </li>
        <li>
          <Link to="/products/new">Create product</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default App;
