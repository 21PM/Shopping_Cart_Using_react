import { useEffect, useState } from "react";
import "./App.css";
import CartCard from "./cartcard";

function Cart({state,dispatch}) {

// console.log(state);


    const[total,Settotal] = useState(0)
  let sum = 0;

  useEffect(()=>{
    
    state.map((ele)=>{
      sum += ele.quantity * ele.price;
    })
    Settotal(sum)
  
  },[state])
 
  return (
    <>
      <div className="cartDiv">
        <div className="addeditem">
          {state.map((ele) => {
            if(ele.quantity >0){
                return(
                    <>
            <div className="addedproducts" key={ele.id}>
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
