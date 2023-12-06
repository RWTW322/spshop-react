import React from "react";
import { Header } from "./Header";
import { BillingInforamtion } from "./BillingIngormation";
import { Cart } from "./Cart";

export function App() {

    return (
        <>
            <Header />
            <div className="container">
                <BillingInforamtion />
                <Cart />
            </div>
        </>
    );
}