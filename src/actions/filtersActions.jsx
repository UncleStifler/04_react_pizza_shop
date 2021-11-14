const {SET_SORT_BY, SET_CATEGORY} = require("../reducers/filtersReducer");


export const setSortByAC = (sortName) => ({
    type: SET_SORT_BY,
    payload: sortName
})


export const setCategoryAC = (catIndex) => ({
    type: SET_CATEGORY,
    payload: catIndex
})