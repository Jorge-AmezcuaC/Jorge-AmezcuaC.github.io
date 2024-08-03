import React, {useRef, useEffect, useState} from "react";

const Circle = ({clasStyle}) => {
    const circle = useRef()
    const [top, setTop] = useState()
    const [left, setLeft] = useState()

    useEffect(() => {
        if(circle.current){
            setTop(circle.current.offsetTop);
            setLeft(circle.current.offsetLeft);
        }
        // Move()
    }, [])

    // const Move = () => {
    //     setInterval(() => {
    //         setTop(circle.current.offsetTop+(Math.random() < 0.5 ? -1 : 1))
    //         setLeft(circle.current.offsetLeft+(Math.random() < 0.5 ? -1 : 1))
    //     }, 2)
    // }

    return(
        <div ref={circle} className={clasStyle} style={{top: `${top}px`, left: `${left}px`}}></div>
    )
}

export default Circle