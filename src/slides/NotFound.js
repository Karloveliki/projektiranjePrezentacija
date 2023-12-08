import Slide from "../components/Slide";
import {useLocation} from "react-router-dom";

function NotFound(props){
    const { pathname } = useLocation();
    return(
        <Slide title="Nije pronađeno">
                {pathname}
        </Slide>
    )
}
export default NotFound;