import React, {useCallback} from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryAC} from "../reducers/filtersReducer";

const Home = React.memo(() => {
    console.log("Home rerender")
    const dispatch = useDispatch()

    const items = useSelector(state => state.pizzas.items)
    const typeOfFilterPopUp = useSelector(state => state.filters.typeOfFilterPopUp)
    const itemsCategories = useSelector(state => state.filters.itemsCategories)

    const onClickItem = useCallback((index) => {
        dispatch(setCategoryAC(index))
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onClickItem}
                    itemsCategories={itemsCategories}/>
                <SortPopup typeOfFilterPopUp={typeOfFilterPopUp}/>
            </div>
            <h2 className="content__title">Todas las pizzas</h2>
            <div className="content__items">
                {
                    items && items.map(obj => {
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
});

export default Home;