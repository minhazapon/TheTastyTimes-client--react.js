import SDDetails from "./SDDetails";


const SDList = ({sd}) => {




    return (
        
        <div className=" flex justify-center ">

            <div className=" grid  md:grid-cols-3 gap-5 ">

                     {
                         
                         sd.map(  (sd, index) =>{
                            
                            return (

                               <SDDetails  key={index} image={sd.image} name={sd.name} para={sd.para} ></SDDetails>

                            )


                         } )

                     }
    

            </div>
            
        </div>
    );
};

export default SDList;