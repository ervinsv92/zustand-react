import React, { useEffect } from 'react'
import {useCounterStore} from './store/counterStore';
import {shallow} from 'zustand/shallow';

const App = () => {

  const {count, name} = useCounterStore(state => ({
    count:state.count,
    name:state.name
  }), shallow); //Shallow sirve para cuando se ocupa detectar que algo dentro de un objeto cambio

  //const increment = useCounterStore(state => state.increment);
  //const count = useCounterStore(state => state.count);
  //const name = useCounterStore(state => state.name);

  useEffect(() => {
    getPosts()
  }, [])
  

  const {increment, getPosts, posts, multiply} = useCounterStore();
  
  return (
    <div>
      <p>{count}</p>
      <p>{name}</p>
      <button onClick={() => increment(3)}>+3</button>
      <button onClick={() => multiply(2)}>x2</button>
      <p>{JSON.stringify(posts)}</p>
    </div>
  )
}

export default App