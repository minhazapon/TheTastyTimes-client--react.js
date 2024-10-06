


const SaladDeatils = ({salad}) => {


    const {image, name, para} = salad



    return (

        <div>

            <div className="max-w-xs p-6 rounded-md shadow-md bg-black text-gray-50">
            	<img src='https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?t=st=1728178456~exp=1728182056~hmac=fa764169c7806eed24404ad11a4b3318cab3374f1b7de06823590086fec8d0c2&w=740' alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            	<div className="mt-6 mb-2">
            	
            		<h2 className="text-xl font-semibold tracking-wide"> {name} </h2>
            	</div>
            	<p className="text-gray-100"> {para} </p>
                <div>
                    <button className=" btn mt-5 ">Add Cart</button>
                </div>
            </div>


            
        </div>
    );
};

export default SaladDeatils;