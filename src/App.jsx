import './App.css';
import {Component} from "react";
import axios from "axios";
import {setPizzasAC} from "./actions/pizzasAction";
import Header from "./components/Header";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {connect} from "react-redux";

export const itemsCategories = ["Todo", "Carne", "Vegetariano", "Gril", "Picante", "Cerrados"];
export const typeOfFilterPopUp = [
    {name: 'popularidad', type: 'popular'},
    {name: 'precio', type: 'price'},
    {name: 'alfabético', type: 'alphabet '}];


// function App() {
//
//     // пустой массив говорит о том, что рендер будет происходить только единожды
//     useEffect(() => {
//         axios.get("http://localhost:3000/db.json").then(({data}) => {
//             console.log(setPizzasAC(data.))
//         });
//     }, []);
//     //     fetch('http://localhost:3000/db.json')
//     //         .then(response => {
//     //             console.log('fetch', response);
//     //             return response.json();
//     //         })
//     //         .then(json => {
//     //             setPizzas(json.pizzas);
//     //         });
//     // }, []);
//
//
//     return;
// }

class App extends Component {
    componentDidMount() {
        axios.get("http://localhost:3000/db.json").then(({data}) => {
            this.props.dispatch(setPizzasAC(data.pizzas));
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path="/" render={() =>
                        <Home
                            pizzas={this.props.items}
                            typeOfFilterPopUp={typeOfFilterPopUp}
                            itemsCategories={itemsCategories}/>} exact/>
                    <Route path="/cart" component={Cart} exact/>
                    <div/>
                </div>
            </div>
        );
    }
}

const getState = (state) => {
    return {
        items: state.pizzas.items
    }
}


export default connect(getState)(App);
