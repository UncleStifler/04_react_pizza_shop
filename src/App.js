import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";
import {useEffect, useState} from "react";

export const itemsCategories = ["Todo", "Carne", "Vegetariano", "Gril", "Picante", "Cerrados"];
export const typeOfFilterPopUp = ["popularidad", "precio", "alfabético"];

function App() {

    const [pizzas, setPizzas] = useState([]);

    // пустой массив говорит о том, что рендер будет происходить только единожды
    useEffect(() => {
        fetch('http://localhost:3000/db.json').then((response) => response.json()).then(json => {
            setPizzas(json.pizzas);
        });
    }, []);
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" render={() =>
                    <Home
                        pizzas={pizzas}/>} exact/>
                <Route path="/cart" component={Cart} exact/>
                <div/>
            </div>
        </div>
    );
}

export default App;
