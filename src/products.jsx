import { useReducer, useState } from "react";
import "./App.css";

function Products({Products,Setproductdataapp}) {
    

  const [ProductsArray , SetProductsArray] = useState(Products)


            function IncrementQuantity(id){
            const filterdata = ProductsArray.map(ele =>{
                if(ele.id === id){
                    return{...ele,quantity:ele.quantity+1}
                }
                return ele;
            })
            SetProductsArray(filterdata)
            Setproductdataapp(filterdata)
            
        }
        

        function DecrementQuantity(id){
            const filterdata = ProductsArray.map(ele =>{
                if(ele.id === id){
                    if(ele.quantity>0)
                    return{...ele,quantity:ele.quantity-1}
                }
                return ele;
            })
            SetProductsArray(filterdata)

            Setproductdataapp(filterdata)
        }

  return (
    <>
      <div className="productDiv">
        {ProductsArray.map((ele) => {
          return (
            <div className="productcard" key={ele.id}>
              <section>{ele.name}</section>
              <section>{ele.price}</section>
              <section className="quantityDiv" key={ele.id}>
                <span onClick={()=>DecrementQuantity(ele.id)}>-</span>
            
                <span>{ele.quantity}</span>   

                <span onClick={()=>IncrementQuantity(ele.id)}>+</span>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
