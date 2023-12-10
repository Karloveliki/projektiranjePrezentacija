import Slide from '../components/Slide';
import Bullet from '../components/Bullet';
import BulletList from '../components/BulletList';

function ProblemiSaNatom(props){
    return(
        <Slide title="Problemi sa NAT-om i port fowardingom iz doma">
            <div className="w3-container w3-xlarge">Izvedivo, ali:</div>
            <BulletList>
                <Bullet> kućni router treba podrzavati port forwarding</Bullet>
                <Bullet> trebamo imati administartorski pristup routeru da ga konfiguriramo</Bullet>
                <Bullet> javna IP adresa routera je obično promjenljiva</Bullet>
                <Bullet> potreban je dodatni software koji će prepoznati promjenu javne IP adrese i ažurirati dns da pokazuje na novu javnu IP adresu</Bullet>
                <Bullet> i detekcija promjene adrese i automatsko ažuriranje DNSa nisu jednoznačno standardizirani</Bullet>
                <Bullet> rješenje je specifično za danu situaciju</Bullet>
            </BulletList>
        </Slide>
    )
}
export default ProblemiSaNatom;







