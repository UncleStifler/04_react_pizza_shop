export const SET_SORT_BY = "SET_SORT_BY"
export const SET_CATEGORY = "SET_CATEGORY"

const initialState = {
    category: 0,
    sortBy: "popularidad"
};


export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY: {
            return {
                ...state,
                sortBy: action.payload
            };
        }

        default:
            return state;
    }
};

