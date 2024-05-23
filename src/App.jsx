
import './App.css'
import Products from './products'
import Cart from './cart'
import { useReducer, useState } from 'react'


function App() {

  const Productsarr = [
    { id: 0, name: "Product-1", price: 100 ,quantity:0},
    { id: 1, name: "Product-2", price: 200 ,quantity:0},
    { id: 2, name: "Product-3", price: 300 ,quantity:0},
  ];
 
  const [productdata,Setproductdata] = useState(Productsarr)
  // const [state,dispatch] = useReducer(reducer,

  function UpdateproductsData(data){
    Setproductdata(data)
  }

  return (
    <>
         <div className="outerDiv">
           <Products Products={productdata} Setproductdataapp={UpdateproductsData}/>
           <Cart Products={productdata} Setproductdataapp={UpdateproductsData}/>
        </div>
          
    </>
  )
}

export default App
