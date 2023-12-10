import Slide from "../components/Slide";
import slika from './images/PromjenaStatusaTunela.jpg';
import Dijagram from "../components/Dijagram";

function ProvjeraStatusaTunela(props){

    return(
        <Slide title="Provjera statusa tunela">
            <Dijagram src={slika}></Dijagram>
        </Slide>
    )
}
export default ProvjeraStatusaTunela;