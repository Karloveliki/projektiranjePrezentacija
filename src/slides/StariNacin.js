import Slide from "../components/Slide";
import Staripng from './images/starinacin.drawio.png';
import Dijagram from "../components/Dijagram";

function StariNacin(props){
    return(
        <Slide title="Stari način">
            <Dijagram src={Staripng} height="300px"></Dijagram>
        </Slide>
    )
}
export default StariNacin;