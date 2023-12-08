function Slide(props){



    return(
        <div>
            <h1>{props.title}</h1>
            <hr></hr>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default Slide;