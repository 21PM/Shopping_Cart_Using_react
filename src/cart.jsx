import { useEffect, useState } from "react";
import "./App.css";
import CartCard from "./cartcard";

function Cart({ Products }) {
  const [Productsarray, SetProductsArray] = useState(Products);


  const [total,Settotal] =  useState(0)


  const calculateTotal = () => {
    let newTotal = 0;
    for (let i = 0; i < Productsarray.length; i++) {
      if (Productsarray[i].quantity > 0) {
        newTotal += Productsarray[i].quantity * Productsarray[i].price;
      }
    }
    Settotal(newTotal);
  };


  useEffect(() => {
    calculateTotal(); 
    SetProductsArray(Products);
    
  }, [Products,total]);


  return (
    <>
      <div className="cartDiv">
        <div className="addeditem">
          {Productsarray.map((ele) => {
            if(ele.quantity >0){
                return(
                    <>
            <div className="addedproducts">
            <section>{ele.name}</section>
            <section className="multiplicationDiv">
              <span>{ele.quantity}</span>
              <span>x</span>
              <span>{ele.price}</span>
            </section>
          </div>
          </>
                )
            }
          })}
        </div>
        <div className="total">
          <h1>Total : </h1>
          <h1>{total}</h1>
        </div>
      </div>
    </>
  );
}

export default Cart;
