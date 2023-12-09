import { Link } from "react-router-dom";
function PresentationControl(props){
    console.log("p je:",props.presentation)
    const {slides} = props.presentation
    const krajPath = "/" + slides[slides.length-1].path
    return(
        <div>
            <ul>          
                <li><Link to="/nazad">nazad</Link></li> 
                <li><Link to="/naprijed">naprijed</Link></li> 
                <li><Link to="/">početak</Link></li> 
                <li><Link to={krajPath}>kraj</Link></li> 
            </ul>

        </div>
    )
}
export default PresentationControl;