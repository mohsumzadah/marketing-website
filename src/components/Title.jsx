import React from "react"


function Title(props){
    return (<div className="title flex">
        <h1 className="title-text">{props.title}</h1>
    </div>
    )
}

export default Title;