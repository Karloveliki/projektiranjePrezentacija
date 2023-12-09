import Slide from '../components/Slide';
import Bullet from '../components/Bullet';
import BulletList from '../components/BulletList';

function TCPveze(props){
    return(
        <Slide title="3 Connections part 1">
            <BulletList>
                <Bullet> od browsera do edge servera </Bullet>
                <Bullet> od cloudflare konektora do lokalnog servera </Bullet>
                <Bullet> jedna od connectora do edge servera -dugotrajna veza, inicira ju konektor iz lokalne mreže prema javnom internetu</Bullet>    
            </BulletList>
        </Slide>
    )
}
export default TCPveze;