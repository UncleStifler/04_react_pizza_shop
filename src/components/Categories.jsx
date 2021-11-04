import React, {useState} from 'react';
import {v1} from "uuid";

const Categories = (props) => {

    const {itemsCategories} = props;
    const [activeItem, setActiveItem] = useState(0);

    const onClickActive = (index) => {
        setActiveItem(index);
    };

    return (
        <div className="categories">
            <ul>
                {itemsCategories.map((t, index) => {
                        let key = v1();
                        return (
                            <li
                                className={activeItem === index ? 'active' : ''}
                                onClick={() => onClickActive(index)}
                                key={key}>{t}
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
};

export default Categories;