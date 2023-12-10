import Slide from "../components/Slide";
import slika from './images/nameserveri.png';
import Dijagram from "../components/Dijagram";


function Nameserveri(props){
    return(
        <Slide title="Prepuštanje DNS-a Cloudflare-u">
            <Dijagram src={slika}></Dijagram>
        </Slide>
    )
}
export default Nameserveri;