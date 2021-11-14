import React, {useState} from 'react';
import {v1} from "uuid";

const Categories = React.memo((props) => {


    const {itemsCategories} = props;
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