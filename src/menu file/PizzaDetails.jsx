


const PizzaDetails = ({pizza}) => {

    const {image, name, para} = pizza


    return (
        <div>

            <div className="max-w-xs p-6 rounded-md shadow-md bg-black text-gray-50">
            	<img src='https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873870.jpg?t=st=1728178414~exp=1728182014~hmac=d8d454c7567d69b0928b924a982123f14955abc0711d9e8c78eaff81a75f1717&w=826' alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
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

export default PizzaDetails;