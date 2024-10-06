import { useEffect, useState } from "react";
import OfferDetails from "./OfferDetails";



const Offer = () => {


    const [ offer, setOffer ] = useState([])


    useEffect( () => {


        fetch('http://localhost:5000/menuData')
        .then( res => res.json())
        .then(data => setOffer(data))



        
    } , [])


    return (
        <div className=" mt-10 mb-10 ml-10 mr-10">

            <div>


               <div className=" flex justify-center items-center gap-5">
                  <p className=" font-serif text-5xl ">Today Offer</p>
                  <img className=" h-[100px] " src="https://cdn-icons-gif.flaticon.com/8797/8797968.gif" alt="" />
               </div>



            <div className=" flex justify-center mt-10">
                <div className=" grid   md:grid-cols-4 gap-5 ">




                    {

                        
                          offer.map( offer => <OfferDetails offer={offer}></OfferDetails> )



                    }






                </div>
            </div>




            </div>
            
        </div>
    );
};

export default Offer;