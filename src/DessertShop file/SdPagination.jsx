



const SdPagination = ({ totalPost, postPerPage , setCurrentPage }) => {
    
    let shops = [] 


    for( let i = 1; i <= Math.ceil(totalPost/postPerPage); i++ ){

      shops.push(i)

    }

    return (
        <div>

            {

               shops.map( (shops, index) =>{

                  return <div className="join">
                  <button onClick={() => setCurrentPage(shops) } className="join-item btn hover:bg-black text-blue-500  " key={index}> {shops} </button>
                  </div>

               } )

            }
            
        </div>
    );
};

export default SdPagination;