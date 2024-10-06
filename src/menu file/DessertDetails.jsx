


const DessertDetails = ({des}) => {
     
    const {image, name, para} = des

    return (
        <div>

            <div className="max-w-xs p-6 rounded-md shadow-md bg-black text-gray-50">
            	<img src='https://img.freepik.com/free-photo/front-view-chocolate-cake-stand_23-2148834043.jpg?t=st=1728178246~exp=1728181846~hmac=729a5426eef2ac7bac1a07c5f9ec947da1931027c5ff27147b032ba5da7c5dd1&w=826' alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
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

export default DessertDetails;