import React, {useState} from 'react';

const Categories = React.memo(({onClickItem, itemsCategories}) => {
    console.log("Categories rerender")
    const [activeItem, setActiveItem] = useState(0);
    const onClickActive = (index) => {
        setActiveItem(index);
        onClickItem(index)
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