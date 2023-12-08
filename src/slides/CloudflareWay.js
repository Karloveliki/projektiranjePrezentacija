import Slide from '../components/Slide';
import Bullet from '../components/Bullet';
import BulletList from '../components/BulletList';
function CloudflareWay(props){
    return(
        <Slide title="Cloudflare way">
            <BulletList>
                <Bullet> ne zahtijeva promjene na routeru</Bullet>
                <Bullet> ne zahtjeva port forwarding</Bullet>
                <Bullet>radi iz bilo koje lokalne mreže koja ima pristup internetu</Bullet>
                <Bullet> npr(doma,faks,kafić…)</Bullet>
                
            </BulletList>
        </Slide>
    )
}
export default CloudflareWay