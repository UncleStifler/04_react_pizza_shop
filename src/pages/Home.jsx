import React from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";

const Home = (props) => {

    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <SortPopup/>
            </div>
            <h2 className="content__title">Todas las pizzas</h2>
            <div className="content__items">
                {
                   props.pizzas && props.pizzas.map(obj => {
                        return (
                            <PizzaBlock
                            key={obj.id}
                            {...obj}/>
                        );
                    })
                }

            </div>
        </div>
    );
};

export default Home;