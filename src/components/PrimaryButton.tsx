import React from "react";

interface Btn {
    text: string;
}

export const PrimaryButton = (props: Btn) => {
    
    return <button className="primary-btn btn">{props.text}</button>
};