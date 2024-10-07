import { useQuery } from "@tanstack/react-query";
import ReadDataDetails from "./ReadDataDetails";


const ReadData = () => {

    const { data: query } = useQuery({

       queryKey: [ "query" ],
       queryFn: async () =>{

           const res = await fetch('http://localhost:5000/addData')
            return res.json()

       }

    })


    return (
        <div className=" mt-10 mb-10 ml-5 mr-5 flex justify-center ">
          
          <div className=" grid  md:grid-cols-3  gap-5 ">
               
               {

                 query?.map( query => <ReadDataDetails  query={query} ></ReadDataDetails> )

               }

          </div>
           
            
        </div>
    );
};

export default ReadData;