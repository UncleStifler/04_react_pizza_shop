import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Categories = React.memo(() => {

    const itemsCategories = useSelector(state => state.filters.itemsCategories)

    const [activeItem, setActiveItem] = useState(0);

    const onClickActive = (index) => {
            setActiveItem(index);
    };

    return (
        <div className="categories">
            <ul>
                {itemsCategories && itemsCategories.map((t, index) => {

                        return (
                            <li
                                className={activeItem === index ? 'active' : ''}
                                onClick={() => onClickActive(index)}
                                key={index}>{t}
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
});

export default Categories;