import Slide from "../components/Slide";
import Dijagram from "../components/Dijagram";
import uobicajeni from "./images/uobicajeninacin.drawio.png";
function UobicajeniNacin(props){


    return (
        <Slide title="Uobičajeni način">
            <Dijagram src={uobicajeni}></Dijagram>
        </Slide>
    )
}
export default UobicajeniNacin