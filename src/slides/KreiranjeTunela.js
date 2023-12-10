import Slide from "../components/Slide";
import slika from './images/Tunel.jpg';
import Dijagram from "../components/Dijagram";


function KreiranjeTunela(props){

    return(
        <Slide title="Kreiranje tunela">
            <Dijagram src={slika}></Dijagram>
        </Slide>
    )

}
export default KreiranjeTunela;