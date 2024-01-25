import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Todos from './Todos';

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c+1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

function Car() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'BMW',
    year: '2018',
    color: 'black'
  });

  const updateCar = () => {
    setCar(previousState => {
      return {...previousState, brand: 'Landborghini', model: 'Aventador LP 780-4 Ultimae', year: '2024', color: "silver"}
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        In {car.year}, I have a {car.color} {car.model} car. 
      </p>
      <button
        type='button'
        onClick={updateCar}>Change</button>
    </>
  )
}

function Timer(){
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=> count+1);
    }, 1000);
  }, []);

  return <h1>I've rendered {count} times! </h1>;
}

function Counter(){
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(()=>{
    setCalculation(()=>count * 2);
  },[count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={()=> setCount((c)=> c+1)}>Plus</button>
      <p>calculation: {calculation}</p>
    </>
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);


