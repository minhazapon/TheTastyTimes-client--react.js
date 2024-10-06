

const PIzzaPagination = ({ totalPost, postPerPage, setCurrentPage }) => {
    

    let pizzas = [] 

    for( let i = 1; i <= (totalPost/postPerPage); i++  ){

        pizzas.push(i)

    }
    
    
    return (
        <div>

            
            {
            
            pizzas.map( (pizzas, index) =>{
            
               return <div className="join">
               <button onClick={() => setCurrentPage(pizzas) } className="join-item btn hover:bg-black text-blue-500  " key={index}> {pizzas} </button>
               </div>
            
            } )
            
            }
            
        </div>
    );
};

export default PIzzaPagination;