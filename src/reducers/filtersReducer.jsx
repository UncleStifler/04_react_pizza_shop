const initialState = {
    category: 0,
    sortBy: "popularidad",
    typeOfFilterPopUp: [
        {name: 'popularidad', type: 'popular'},
        {name: 'precio', type: 'price'},
        {name: 'alfabético', type: 'alphabet '}
    ],
    itemsCategories:
        ["Todo", "Carne", "Vegetariano", "Gril", "Picante", "Cerrados"]
};


export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SORT_BY": {
            return {
                ...state,
                sortBy: action.payload
            };
        }
        case "SET_CATEGORY": {
            return {
                ...state,
                category: action.payload
            }
        }

        default:
            return state;
    }
};

export const setSortByAC = (sortName) => ({
    type: "SET_SORT_BY",
    payload: sortName
})

export const setCategoryAC = (catIndex) => ({
    type: "SET_CATEGORY",
    payload: catIndex
})
