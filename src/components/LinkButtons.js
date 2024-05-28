import React from "react";

const LinkButton = ({link, icon, text, action}) => {
    return(
        <a href={link}><button onClick={action}>{icon}{text}</button></a>
    )
}

export default LinkButton