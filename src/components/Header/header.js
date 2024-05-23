import { useState } from "react";
import "./Header.css";
import Modal from "../UI/modal";

function Header({openCart}) {
    // const [showCart, setShowCart] = useState(false);

    // const openCart = () => setShowCart(true);
    // const closeCart = () => setShowCart(false);
    return (
        <div className="header">
            <h1>My e-commerce app</h1>
            <div>
                <button className="yellow-button" onClick={openCart}>
                    Cart
                </button>
            </div>
        </div>
    );
}

export default Header;