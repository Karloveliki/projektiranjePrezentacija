import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";

function PresentationControl(props){
    console.log("p je:",props.presentation)
    const {slides} = props.presentation
    const krajPath = "/" + slides[slides.length-1].path
    //const nazad="/" + slides[]
    const { pathname } = useLocation();
    console.log("pathname trenutni",pathname)
    let slideIndex
    if (pathname == "/") {
        slideIndex = -1
    }
    slides.forEach((slajd, ix)  => {
        console.log(slajd.path)
        if(pathname=='/'+slajd.path){
            slideIndex = ix
        }
    });
    if (slideIndex === undefined) {
        console.log("slide not found in presentation")
        return (
            <div>
                <li><Link to="/">početak</Link></li>
            </div>
        )
    }
    console.log(slideIndex)
    let prethodnik
    if(slideIndex>0){
        prethodnik="/"+slides[slideIndex-1].path
    }
    if (slideIndex==0) {
        prethodnik = "/"
    }
    let iduci
    if(slideIndex<slides.length-1){
        iduci="/"+slides[slideIndex+1].path
    }
    return(
        <div>
            <ul>          
                {prethodnik ? <li><Link to={prethodnik}>nazad</Link></li> : null}
                {iduci ? <li><Link to={iduci}>naprijed</Link></li> : null}
                <li><Link to="/">početak</Link></li> 
                <li><Link to={krajPath}>kraj</Link></li> 
            </ul>

        </div>
    )
}
export default PresentationControl;