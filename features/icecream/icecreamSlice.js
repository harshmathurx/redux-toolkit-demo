const createSlice = require('@reduxjs/toolkit').createSlice;

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState: {
        numberOfIceCreams: 20,
    },
    reducers: {
        ordered: (state) => {
            state.numberOfIceCreams--
        },
        restocked: (state, action) => {
            state.numberOfIceCreams += action.payload
        }
    },
    extraReducers: {
        ['cake/ordered']: (state,action) => {
            state.numberOfIceCreams--
        }
    }
})

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;