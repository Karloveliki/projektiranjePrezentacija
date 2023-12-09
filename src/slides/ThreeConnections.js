import Dijagram from "../components/Dijagram";
import Slide from "../components/Slide";
import TCP_IPveze from './images/TCP_IPveze.drawio.png';
function ThreeConnections(props){
    return(
        <Slide title="3 Connections part 2">
            <Dijagram src={TCP_IPveze}></Dijagram>
        </Slide>
    )
}
export default ThreeConnections;