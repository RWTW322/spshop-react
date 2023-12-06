import React from "react";

export function CartPromoCode() {

    return (
        <div className="cart__promo-code">
            <h2 className="promo-code__title title">
                Promo code
            </h2>

            <form className="promo-code__form">
                <input className="promo-code__input" type="text" placeholder="Placeholder Text" />
                <input className="promo-code__apply-btn primary-btn btn" value="Apply" />
            </form>
        </div>
    );
}