function Slide(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <hr></hr>
            <div class="w3-container w3-white slidecontent" >
                {props.children}
            </div>
        </div>
    )
}
export default Slide;