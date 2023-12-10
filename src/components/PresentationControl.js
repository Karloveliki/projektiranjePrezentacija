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
        <div class="w3-panel w3-bar">
            <div class="w3-button">
                <Link to="/" class="w3-round w3-cyan w3-padding-small">početak</Link>
            </div> 
            <div class="w3-button">
                {prethodnik ? 
                    <Link to={prethodnik} class="w3-round w3-cyan w3-padding-small">nazad</Link> 
                    :
                    <Link to="#" class="w3-round w3-cyan w3-padding-small w3-disabled" >nazad</Link>
                }
            </div> 
            <div class="w3-button  w3-right ">
                <Link to={krajPath} class="w3-round w3-cyan w3-padding-small">kraj</Link> 
            </div> 
            <div class=" w3-button w3-right">
                {iduci ? 
                    <Link to={iduci} class="w3-round w3-cyan w3-padding-small" >naprijed</Link> 
                    : 
                    <Link to="#" class="w3-round w3-cyan w3-padding-small w3-disabled" >naprijed</Link>
                }
            </div> 
        </div>          
    )
}
export default PresentationControl;