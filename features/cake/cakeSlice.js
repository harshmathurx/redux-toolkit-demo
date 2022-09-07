const createSlice = require('@reduxjs/toolkit').createSlice;

const initailState = {
    numberOfCakes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initailState,
    reducers: {
        ordered: (state) => {
            state.numberOfCakes--       
        },
        restocked: (state,action) => {
            state.numberOfCakes += action.payload
        }
    }
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;