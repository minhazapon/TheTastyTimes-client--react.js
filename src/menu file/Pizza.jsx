import { useEffect, useState } from "react";
import PizzaDetails from "./PizzaDetails";



const Pizza = () => {

  const [pizza, setPizza] = useState([])

  useEffect( () =>{
    
     fetch('http://localhost:5000/menuData')
     .then( res => res.json())
     .then( data => setPizza(data) )

  } , [])


    return (
        <div>

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873870.jpg?t=st=1728178414~exp=1728182014~hmac=d8d454c7567d69b0928b924a982123f14955abc0711d9e8c78eaff81a75f1717&w=826)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
              <div className="">
                  <h1 className="mb-5 text-6xl font-bold font-serif text-white  ">Pizza</h1>
                </div>
              </div>
            </div>


            <div className=" flex justify-center mt-10  mb-10 ml-10 mr-10">
              <div className=" grid  md:grid-cols-4 gap-5">
                   {
                      pizza.map( pizza =>  <PizzaDetails pizza={pizza} ></PizzaDetails> )
                   }
              </div>
            </div>
            
        </div>
    );
};

export default Pizza;