import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
const Counter = () => {

  const dispatch=useDispatch();

  const counter=useSelector(state=> state.counter);

  const incrementHandler=()=>{
    dispatch({type : 'increment'});
  };

  
  const incrementHandler1=()=>{
    dispatch({type : 'increment1'});
  };

  const decrementHandler=()=>{
    dispatch({type : 'decrement'});
  };

  const decrementHandler1=()=>{
    dispatch({type : 'decrement1'});
  };
  const toggleCounterHandler = () => {};
    
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>

        <button onClick={incrementHandler1}>increment5</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={decrementHandler1}>decrement5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
