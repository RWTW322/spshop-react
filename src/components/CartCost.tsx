import React from "react";

interface Cost {
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
}

export function CartCost(props: Cost) {

    return (
        <div className="cart__cost">
            <ul className="cost-list__names">
                <li className="list-item">Subtotal</li>
                <li className="list-item">Tax</li>
                <li className="list-item">Shipping</li>
                <li className="list-item total">Total</li>
            </ul>

            <ul className="cost-list__values">
                <li className="list-item">${props.subtotal}</li>
                <li className="list-item">${props.subtotal > 0 ? props.tax : 0}</li>
                <li className="list-item">${props.subtotal > 0 ? props.shipping : 0}</li>
                <li className="list-item total">${props.subtotal > 0 ? props.total : 0}</li>
            </ul>
        </div>
    );
}

