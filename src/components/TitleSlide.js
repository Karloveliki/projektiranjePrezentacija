function TitleSlide(props){
    return(
        <div className="w3-bar-block w3-center slidecontent" >
            <div class="w3-container w3-bar-item" height="400px">
                <h1>{props.title}</h1>
            </div>
            <div class="w3-container w3-bar-item"  height="200px">
                {props.children}
            </div>
        </div>
    )
}
export default TitleSlide;