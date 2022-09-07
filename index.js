const store = require('./app/store');
const { iceCreamActions } = require('./features/icecream/iceCreamSlice');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;

console.log('Initial state: ', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state: ', store.getState()));

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(5));

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(5));
unsubscribe();
