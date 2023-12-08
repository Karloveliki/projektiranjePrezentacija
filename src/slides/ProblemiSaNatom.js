import Slide from '../components/Slide';
import Bullet from '../components/Bullet';
import BulletList from '../components/BulletList';

function ProblemiSaNatom(props){
    return(
        <Slide title="Problemi sa NAT-om i port fowardingom iz doma">
            <BulletList>
                <Bullet> Izvedivo,ali</Bullet>
                <Bullet> kućni router treba podrzavati port forwarding</Bullet>
                <Bullet> trebamo imati administartorski pristup routeru da ga konfigiriramo</Bullet>
                <Bullet> javna IP adresa routera je obicno promjenljiva</Bullet>
                <Bullet> potreban je dodatni software koji ce prepoznati promjenu javne IP adrese i azurirati dns da pokazuje na novu javnu IP adresu</Bullet>
                <Bullet> i detekcija promjene adrese i automatsko azuriranje DNSa nisu jednoznacno standardizirani</Bullet>
                <Bullet> rjesenje je specificno za danu situaciju</Bullet>
            </BulletList>
        </Slide>
    )
}
export default ProblemiSaNatom;







