import Slide from "../components/Slide";
import CloudflareT from './images/cloudflare tunnel.drawio(1).png';
import Dijagram from "../components/Dijagram";
function CloudflareTunnel(props){

    return(
        <Slide title="Cloudflare tunel">
           
            <Dijagram src={CloudflareT}></Dijagram>
            
        </Slide>
    )
}
export default CloudflareTunnel;