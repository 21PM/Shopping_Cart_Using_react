import { useReducer, useState } from "react";
import "./App.css";
import { useEffect } from "react";

function Products({state,dispatch}) {



  useEffect(()=>{

  },[state])
    

  // const [ProductsArray , SetProductsArray] = useState(Products)


        //     function IncrementQuantity(id){
        //     const filterdata = ProductsArray.map(ele =>{
        //         if(ele.id === id){
        //             return{...ele,quantity:ele.quantity+1}
        //         }
        //         return ele;
        //     })

        //     console.log(filterdata);
        //     SetProductsArray(filterdata)
        //     Setproductdataapp(filterdata)
            
        // }
        

        // function DecrementQuantity(id){
        //     const filterdata = ProductsArray.map(ele =>{
        //         if(ele.id === id){
        //             if(ele.quantity>0)
        //             return{...ele,quantity:ele.quantity-1}
        //         }
        //         return ele;
        //     })
        //     SetProductsArray(filterdata)

        //     Setproductdataapp(filterdata)
        // }


        function DecrementQuantity (id,quantity){


            if(quantity > 0){
              let filteredstate =  state.map((ele)=>{
            
                if(ele.id === id ){
                  return {...ele,quantity:ele.quantity-1};
                }
                else{
                  return
                }
             })
    
              let remainingData = state.filter((ele)=>{
                if(ele.id !== id){
                  // console.log(ele);
                  return {...ele};
                }
              })
      
    
              let arr = [filteredstate[id],...remainingData]
    
                let sorteddata = arr.sort((a,b)=>{
                      return a.id-b.id;
                })
    
              // console.log(sorteddata);
    
          dispatch({
            type:"Increment",
            payload:sorteddata,
          })
            }else{
              return
            }

        }


        function IncrementQuantity(id){
      
          let filteredstate =  state.map((ele)=>{
            
            if(ele.id === id){
              // console.log(ele);
              return {...ele,quantity:ele.quantity+1};
            }
         })

          let remainingData = state.filter((ele)=>{
            if(ele.id !== id){
;
              return {...ele};
            }
          })


          let arr = [filteredstate[id],...remainingData]

            let sorteddata = arr.sort((a,b)=>{
                  return a.id-b.id;
            })



      dispatch({
        type:"Increment",
        payload:sorteddata,
      })

          
        }

  return (
    <>
      <div className="productDiv">
        {state.map((ele) => {
          return (
            <div className="productcard" key={ele.id}>
              <section>{ele.name}</section>
              <section>{ele.price}</section>
              <section className="quantityDiv" key={ele.id}>
                <span onClick={()=>DecrementQuantity(ele.id,ele.quantity)}>-</span>
            
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
