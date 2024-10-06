import { useEffect, useState } from "react";
import SDList from "./SDList";
import SdPagination from "./SdPagination";


const ShopDessert = () => {

    const [sd, setSd] = useState([])


    const [ currentPage, setCurrentPage ] = useState(1)

    const [postPerPage, setPerPage] = useState(3)

     
    useEffect( () =>{
      
        fetch('http://localhost:5000/shopData')
        .then( res => res.json())
        .then(data => setSd(data))
  
    } , [])


    const lastPostIndex = currentPage * postPerPage 
    const fastPostIndex = lastPostIndex - postPerPage
    const currentPost =  sd.slice(fastPostIndex, lastPostIndex)
 

    return (
        <div className=" mt-10 mb-10 ml-10 mr-10">

            <div>

              <SDList sd={currentPost} ></SDList>

                 
              <div className=" flex justify-center mt-10">
                 <SdPagination totalPost={sd.length}  postPerPage={postPerPage} setCurrentPage={setCurrentPage} ></SdPagination>
              </div>


            </div>
            
        </div>
    );
};

export default ShopDessert;