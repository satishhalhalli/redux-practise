import redux from 'redux';
import { createStore } from 'redux';

const counterReducer=(state={counter : 0}, action)=>{

    if(action.type === 'increment'){
        return{
            counter : state.counter +1,
        }
    }

    if(action.type === 'increment1'){
        return{
            counter : state.counter + 5,
        }
    }

    if(action.type === 'decrement1'){
        return{
            counter : state.counter - 5,
        }
    }
    if(action.type === 'decrement'){
        return{
            counter : state.counter - 1,
        }
    }
    return state;
};
const store= createStore(counterReducer);
 export default store;