import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'sabbir';
  const person = {
    name: 'ahmed',
    age: 34
  }
  var style = {
    color: 'red'
  }
  const nayoks = ['razzak', 'rubel', 'mushfiq'];
  const products = [
    { name: 'Ball', price: '$900' },
    { name: 'Bat', price: '$500' },
    { name: 'cap', price: '$200' },
    { name: 'pants', price: '$200' },
  ];
  const hereos = [
    { name: 'john wick', salary: '$120m' },
    { name: 'vin disel', salary: '$50m' },
    { name: 'tony stark', salary: '$70m' },
    { name: 'captain america', salary: '$3000m' },
  ]
  const games = [
    { name: 'PUBG', rating: '9.9' },
    { name: 'COD', rating: '8.9' },
    { name: 'COC', rating: '5.9' },
    { name: 'Mostafa', rating: '7.9' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counters></Counters>
        {
          games.map(game => <Games game={game}></Games>)
        }

        {/* <Games game={games[0]}></Games>
        <Games game={games[1]}></Games>
        <Games game={games[2]}></Games>
        <Games game={games[3]}></Games> */}
        {/* <Hero hero={hereos[0]} ></Hero> */}
        {/* <Counter></Counter> */}
        {
          hereos.map(hero => <Hero hero1={hero}></Hero>)
        }
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {/* {
            product.map(product1 => <li>{product1.name}</li>)
          } */}
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {/* <Product product={product[0]}></Product>
        <Product product={product[1]}></Product>
        <Product product={product[2]}></Product> */}
        {/* <Product name={product[1].name} price={product[1].price}></Product> */}
        <Person name='sabbir' proffession='worker' salary='1200'></Person>
        <Person name='shawon' proffession='cleaner' salary='200'></Person>
        <Person name='pappu' proffession='carpentar' salary='500'></Person>
      </header>

    </div>
  );
}
function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setUsers(data))
  })
  return(
    <div>
      <h3>Total users are : {users.length}</h3>
      {
        users.map((user)=><li>{user.name}</li>)
      }
    </div>
  )
}
// function Counter() {
//   const [count, setCount] = useState(10);
//   // const isIncrease=()=>setCount(count+1);
//   return (
//     <div>
//       <h3>count : {count}</h3>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }
function Counters() {
  const [count,setCount]=useState(1);
  // const handleClick=()=>{
  //   const newCount=count+1;
  //   setCount(newCount);
  // }
  
  const handleClick=()=>setCount(count+1);
  return (
    <div>
      <h3>count : {count}</h3>
      <button onClick={handleClick}>increase</button>
      <button onClick={()=>setCount(count-1)}>decrease</button>
    </div>)
}
function Games(props) {
  const gameStyle = {
    border: '2px solid gold',
    borderRadius: '10px',
    backgroundColor: 'grey',
    margin: '10px',
    width: '400px'
  }


  const { name, rating } = props.game;
  // console.log(props);
  return (
    <div style={gameStyle}>
      <h2>game name :{name} </h2>
      <h4>rating : {rating} </h4>
      <button>Buy</button>
    </div>
  )
}
function Hero(props) {
  // console.log(props);
  var heroStyle = {
    border: '2px solid white',
    borderRadius: '10px',
    backgroundColor: 'grey',
    margin: '10px',
    padding: '10px',
    width: '400px',
    height: '200px'
  }
  return (
    <div style={heroStyle}>
      <h3>{props.hero1.name}</h3>
      <h5>{props.hero1.salary}</h5>
      <button>see photo</button>
    </div>
  )
}
function Product(props) {
  var productStyle = {
    border: "2px solid white",
    borderRadius: '10px',
    width: '400px',
    height: '200px',
    margin: '10px',
    backgroundColor: 'grey'

  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>Price : {props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props) {
  var style = {
    borderRadius: '10px',
    margin: '10px',
    border: '2px solid gold',
    width: '400px'
  }
  return (<div style={style}>
    <h3>My name is :{props.name} </h3>
    <p>My proffession is :{props.proffession} </p>
    <p>MY salary is :  {props.salary}</p>
  </div>)
}


export default App;
