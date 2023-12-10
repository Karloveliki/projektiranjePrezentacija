import Slide from "../components/Slide";
import slika from './images/instaliranjeKonektora.jpg';
import Dijagram from "../components/Dijagram";

function InstaliranjeKonektora(props){

    return(
        <Slide title="Instaliranje konektora">
            <Dijagram src={slika}></Dijagram>
        </Slide>
    )
}
export default InstaliranjeKonektora;