import Slide from '../components/Slide';
import Bullet from '../components/Bullet';
import BulletList from '../components/BulletList';
function PostupakCloudflare(props){

    return(
        <Slide title="Postupak ko Cloudflare-a">
            <BulletList>
                <Bullet> Dodati uslugaizdoma.online kao Website na cloudflareu </Bullet>
                <Bullet> DNS za domenu prepustiti Cloudflare-u (u godaddy control panelu)</Bullet>
                <Bullet> u zero trust modulu od Cloudflare-a kreirati tunel</Bullet>
                <Bullet> na stroju koji vrti web server instalirati Cloudflare connector</Bullet>
                <Bullet> pokrenuti web server</Bullet>
                <Bullet> Cloudflare mora prepoznati da je tunel aktivan</Bullet>
                
            </BulletList>
        </Slide>
    )
}
export default PostupakCloudflare;