import React from 'react';
import logo from "../resources/img/pizza-logo.svg";
import ButtonShoppingCart from "./ButtonShoppingCart";
import {Link} from "react-router-dom";


const Header = React.memo((props) => {
        return (
            <>
                <div className="header">
                    <div className="container">
                        <>
                            <Link to="/">
                                <div className="header__logo">
                                    <img width="38" src={logo} alt="Pizza logo"/>
                                    <div>
                                        <h1>Pizza Tio</h1>
                                        <p>Una pizza más sabrosa del universo</p>
                                    </div>
                                </div>
                            </Link>
                        </>
                        <div className="header__cart">
                            <Link to="/cart">
                                <ButtonShoppingCart
                                    className="button--cart"/>
                            </Link>
                        </div>

                    </div>
                </div>
            </>
        );
    })
;
export default Header;