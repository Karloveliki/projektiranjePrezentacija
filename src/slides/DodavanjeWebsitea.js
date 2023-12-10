import Slide from "../components/Slide";
import slika from './images/dodavanjeWebsiteanacloudflareu.png';
import Dijagram from "../components/Dijagram";

function DodavanjeWebsitea(props){
    return(
        <Slide title="Dodavanje web-sitea">
            <Dijagram src={slika}></Dijagram>
        </Slide>
    )
}
export default DodavanjeWebsitea;
