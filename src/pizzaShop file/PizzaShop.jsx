import { useEffect, useState } from "react";
import PSList from "./PSList";
import PIzzaPagination from "./PIzzaPagination.JSX";




const PizzaShop = () => {

    const [pizza, setPizza] = useState([])

    const [ currentPage, setCurrentPage ] = useState(1)

    const [postPerPage, setPerPage] = useState(3)


    useEffect( () => {

      fetch('http://localhost:5000/shopData')
      .then( res => res.json())
      .then( data => setPizza(data) )

    } , [])


    const lastPostIndex = currentPage * postPerPage 
    const fastPostIndex = lastPostIndex - postPerPage
    const currentPost =  pizza.slice(fastPostIndex, lastPostIndex)


    return (
        <div className=" mt-10 mb-10 ml-10 mr-10">

            <div>

                <PSList pizza={currentPost} ></PSList>

                
                {/* <div>
                     <PIzzaPagination totalPost={pizza.length}  postPerPage={postPerPage} setCurrentPage={setCurrentPage} ></PIzzaPagination>
                </div> */}

                <div className=" flex justify-center mt-10">
                    
                  <PIzzaPagination totalPost={pizza.length}  postPerPage={postPerPage} setCurrentPage={setCurrentPage} ></PIzzaPagination>

                </div>


            </div>
            
        </div>
    );
};

export default PizzaShop;