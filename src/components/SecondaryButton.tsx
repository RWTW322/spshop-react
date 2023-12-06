import React from "react";

interface Btn {
    text: string;
}

export const SecondaryButton = (props: Btn) => {
    return <button className="secondary-btn btn">{props.text}</button>
};