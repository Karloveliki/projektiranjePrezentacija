import { Outlet, Link } from "react-router-dom";
import PresentationControl from "./PresentationControl";
const Layout = ({presentation}) => {
    console.log("u layoutu:",presentation)
  return (
    <>
    <h1>ja sam iznad</h1>
      <Outlet />
      <PresentationControl presentation={presentation}></PresentationControl>
      <nav>
        <ul>
          <li>
            <Link to="/">Pocetak</Link>
            <Link to="/problemisnatom">Problemi s NAT-om</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Layout;
