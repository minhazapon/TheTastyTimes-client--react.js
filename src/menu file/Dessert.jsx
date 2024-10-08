import { useEffect, useState } from "react";
import DessertDetails from "./DessertDetails";



const Dessert = () => {


    const [des, setDes] = useState([])

    useEffect( () =>{

       fetch('http://localhost:5000/menuData')
       .then( res => res.json())
       .then( data => setDes(data) )


    } , [])


    return (
        <div>

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://img.freepik.com/free-photo/front-view-chocolate-cake-stand_23-2148834043.jpg?t=st=1728178246~exp=1728181846~hmac=729a5426eef2ac7bac1a07c5f9ec947da1931027c5ff27147b032ba5da7c5dd1&w=826)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-6xl font-bold font-serif text-white  ">Dessert</h1>
                </div>
              </div>
            </div>
            
            

            <div className=" flex justify-center mt-10  mb-10 ml-10 mr-10">
              <div className=" grid  md:grid-cols-4 gap-5">
                   {
                      des.map( des => <DessertDetails des={des} ></DessertDetails> )
                   }
              </div>
            </div>

        </div>
    );
};

export default Dessert;