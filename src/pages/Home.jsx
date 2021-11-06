import React from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import {itemsCategories, typeOfFilterPopUp} from "../App";
import PizzaBlock from "../components/PizzaBlock";

const Home = ({pizzas}) => {

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    itemsCategories={itemsCategories}

                />
                <SortPopup
                    typeOfFilterPopUp={typeOfFilterPopUp}/>
            </div>
            <h2 className="content__title">Todas las pizzas</h2>
            <div className="content__items">
                {
                    pizzas.map(obj => {
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