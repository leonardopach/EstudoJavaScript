import React from "react";
import "./Button.css";

const button = props => {
    return (
        < button className={`button
    ${props.operation ? "operation" : ""}
    ${props.doubles ? "doubles" : ""}
    ${props.triples ? "triples" : ""}
    `} >
            {props.label}
        </button >
    )
}
export default button;
