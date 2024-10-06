


const PSD = ({image, name, para}) => {


    return (
        <div>

            <div className="max-w-xs p-6 rounded-md shadow-md bg-black text-gray-50">
            	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
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

export default PSD;