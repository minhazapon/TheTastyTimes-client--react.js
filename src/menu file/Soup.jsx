
import { useEffect, useState } from "react";
import SoupDetails from "./SoupDetails";



const Soup = () => {

    const [ soup, setSoup ] = useState([])


    useEffect( () => {

      fetch('http://localhost:5000/menuData')
      .then( res => res.json())
      .then( data => setSoup(data)  )
 


    } , [])


    return (
        <div>

        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(  https://img.freepik.com/premium-photo/bowl-vegetable-soup-garnished-with-dill_762785-257572.jpg?w=740 )",
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
          <div className="">
                  <h1 className="mb-5 text-6xl font-bold font-serif text-white  ">Soup</h1>
                </div>
          </div>
        </div>


        <div className=" flex justify-center  mt-10 mb-10 ml-10 mr-10 ">
          <div className=" grid  md:grid-cols-4 gap-5">
             {soup.map( soup => <SoupDetails soup={soup} ></SoupDetails> )}
          </div>
        </div>
            
        </div>
    );
};

export default Soup;