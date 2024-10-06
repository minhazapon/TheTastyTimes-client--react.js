import { useEffect, useState } from "react";



const Offer = () => {


    const [ offer, setOffer ] = useState([])


    useEffect( () => {






        
    } , [])


    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">

            <div>


               <div className=" flex justify-center items-center gap-5">
                  <p className=" font-serif text-5xl ">Today Offer</p>
                  <img className=" h-[100px] " src="https://cdn-icons-gif.flaticon.com/8797/8797968.gif" alt="" />
               </div>








            </div>
            
        </div>
    );
};

export default Offer;