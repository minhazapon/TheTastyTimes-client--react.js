import { Link, NavLink } from "react-router-dom";




const Nav = () => {

    const navz = <>
    
       <li className=" font-serif" ><NavLink to='/' >Home</NavLink></li>
       <li className=" font-serif" ><NavLink to='/contact' >Contact</NavLink></li>
       <li className=" font-serif" ><NavLink to='/dash' >Dashboard</NavLink></li>
       <li className=" font-serif" ><NavLink to='/menu' >Menu</NavLink></li>
       <li className=" font-serif" ><NavLink to='/shop' >Shop</NavLink></li>
       <li className=" font-serif" ><NavLink to='/addProducts' >Add Food</NavLink></li>
    
    
    
    
    
    </>
 



    return (
        <div>

<div className="navbar  p-5 shadow-md ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {navz}
      </ul>
    </div>

    <div className=" flex items-center gap-2">
     
    <img className=" h-[100px] " src="https://cdn-icons-gif.flaticon.com/17904/17904235.gif" alt="" />
    <a className=" text-2xl font-serif ">TheTastyTimes</a>

    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navz}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login' >
    <a className="btn bg-white font-serif ">In


    <img className=" h-[30px]" src="https://cdn-icons-gif.flaticon.com/6569/6569164.gif" alt="" />
    </a>
    
    </Link>
  
  </div>
</div>
            
             
        </div>
    );
};

export default Nav;