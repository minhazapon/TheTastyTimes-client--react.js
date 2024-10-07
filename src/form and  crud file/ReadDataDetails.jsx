import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const ReadDataDetails = ({query}) => {
    
    const { _id, name, brand, price, category, photourl,  } = query


    const handleDelete = delete_id =>{
        

        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/addData/${_id}`, {
                method: 'DELETE'
              })
              .then( res => res.json())
              .then( data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }

              } )
 


            }
          });


    }



    return (
        <div>

            <div className="card glass h-[400px] w-[400px] ">
            <figure>
            <img className=" h-[300px] w-[400px] "
            src={photourl}
            alt="car!" />
            </figure>
            <div className="card-body">
            <h2 className="card-title font-serif "> Name: {name} </h2>
            <p className=" font-serif "> Price: {price}  </p>
            <div className="card-actions justify-center mt-5">
            <button className="btn font-serif btn-primary">Buy Now</button>
            <button onClick={ ()=> handleDelete(query._id) }  className="btn font-serif btn-primary">Delete</button>
            <Link to={`/update/${_id}`} >
            <button className="btn font-serif btn-primary">Update</button>
            </Link>
        
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default ReadDataDetails;