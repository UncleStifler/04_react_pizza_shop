import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";

export const itemsCategories = ["Todo", "Carne", "Vegetariano", "Gril", "Picante", "Cerrados"];
export const typeOfFilterPopUp = ["popularidad", "precio", "alfabético"];

function App() {

    return (
        <>
            <div className="wrapper">
                <Header/>
                {/*<Home/>*/}

                <Route path="/" component={Home} exact/>
                <Route path="/cart" component={Cart} exact/>
            </div>
        </>
    );
}

export default App;
