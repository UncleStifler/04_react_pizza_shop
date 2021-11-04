import React from 'react';
import logo from "../resources/img/pizza-logo.svg";
import ButtonShoppingCart from "./ButtonShoppingCart";


const Header = (props) => {


        return (
            <div className="header">
                <div className="container">
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>Una pizza más sabrosa del universo</p>
                        </div>
                    </div>
                    <div className="header__cart">
                        <ButtonShoppingCart
                        className="button--cart"/>
                    </div>
                </div>
            </div>
        );
    }
;
export default Header;