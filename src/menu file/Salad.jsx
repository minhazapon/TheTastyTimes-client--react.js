import { useEffect, useState } from "react";
import SaladDeatils from "./SaladDeatils";



const Salad = () => {
    
    const [salad, setSalad] = useState([])


    useEffect( () =>{
       
      fetch('http://localhost:5000/menuData')
      .then( res => res.json())
      .then(data => setSalad(data))

    } , [])


    return (
        <div>

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(  https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?t=st=1728178456~exp=1728182056~hmac=fa764169c7806eed24404ad11a4b3318cab3374f1b7de06823590086fec8d0c2&w=740  )",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
              <div className="">
                  <h1 className="mb-5 text-6xl font-bold font-serif text-white  ">Salad</h1>
                </div>
              </div>
            </div>



            <div className=" flex justify-center mt-10 mb-10 ml-10 mr-10">
              <div className=" grid  md:grid-cols-4  gap-5">
                {
                  salad.map( salad => <SaladDeatils salad={salad} ></SaladDeatils> )
                }
              </div>
            </div>
            
        </div>
    );
};

export default Salad;