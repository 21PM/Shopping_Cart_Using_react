
import './App.css'
import Products from './products'
import Cart from './cart'
import { useReducer, useState } from 'react'
import { useEffect } from 'react';


function App() {

  const Productsarr = [
    { id: 0, name: "Product-1", price: 100 ,quantity:0},
    { id: 1, name: "Product-2", price: 200 ,quantity:0},
    { id: 2, name: "Product-3", price: 300 ,quantity:0},
  ];

  function reducer(state,action){
    // console.log(action.payload);
        switch(action.type){
          case "Increment":
            return [...action.payload]      }
  }
 
  const [state,dispatch] = useReducer(reducer,Productsarr)



  // console.log(state);




  return (
    <>
         <div className="outerDiv">
           <Products state={state} dispatch={dispatch}/>
           <Cart state={state} dispatch={dispatch}/>
        </div>
          
    </>
  )
}

export default App
