import React from "react";
import { CartPromoCode } from "./CartPromoCode";
import { CartItem } from "./CartItem";
import { CartCost } from "./CartCost";
import { useState } from 'react';
import { products } from "@/app/utils/products";

export function Cart() {
    
    const [items, setItems] = useState(products.map(product => ({ ...product, count: 0 })));

    const tax = 100;
    const shipping = 150;

    function handleClickPlus(itemId: number) {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, count: item.count + 1 } : item
            )
        );
    }

    function handleClickMinus(itemId: number) {
        setItems((prevItems) =>
            prevItems.map((item) =>
                (item.id === itemId) && item.count > 0 ? { ...item, count: item.count - 1 } : item));
    }

    const subtotal = items.reduce((acc, item) => acc + item.count * item.price, 0);
    const total = subtotal + tax + shipping;

    return (
        <section className="cart">
            <div className="cart__items">
                <h2 className="cart__title title">My basket</h2>
                {items.map(item => (
                    <CartItem
                    key={item.id}
                    price={item.price}
                    src={item.img}
                    name={item.name}
                    count={item.count}
                    handleClickMinus={() => handleClickMinus(item.id)}
                    handleClickPlus={() => handleClickPlus(item.id)}
                />
                ))}
            </div>

            <CartPromoCode />
            <CartCost subtotal={subtotal} tax={tax} shipping={shipping} total={total} />
        </section>
    )
}
