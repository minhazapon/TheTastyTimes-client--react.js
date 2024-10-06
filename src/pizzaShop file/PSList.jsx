import PSD from "./PSD";




const PSList = ({pizza}) => {



    return (
        <div className=" flex justify-center">

            <div className=" grid  md:grid-cols-3 gap-5 ">

              
               {pizza.map( ( pizza, index ) => {

                    return (
                      
                       <PSD key={index} image={pizza.image} name={pizza.name} para={pizza.para} ></PSD>


                    )
 

               }  )



               }








            </div>
            
        </div>
    );
};

export default PSList;