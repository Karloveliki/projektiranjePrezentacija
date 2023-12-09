import { Outlet, Link } from "react-router-dom";
import PresentationControl from "./PresentationControl";
const Layout = ({presentation}) => {
    console.log("u layoutu:",presentation)
  return (
    <>
    
      <Outlet />
      <PresentationControl presentation={presentation}></PresentationControl>
      
    </>
  )
};

export default Layout;
