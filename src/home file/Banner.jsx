import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <div>

            {/* <div className=" flex justify-center">
                <img className=" w-full " src="https://img.freepik.com/free-psd/delicious-burger-food-menu-facebook-cover-template_106176-722.jpg?t=st=1728119812~exp=1728123412~hmac=c66472a58b7638cdb9f0d0a8931917b47fbd8715d45d2228561ea4a256302921&w=900" alt="" />
            </div> */}

<div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(  https://img.freepik.com/free-psd/delicious-burger-food-menu-facebook-cover-template_106176-722.jpg?t=st=1728119812~exp=1728123412~hmac=c66472a58b7638cdb9f0d0a8931917b47fbd8715d45d2228561ea4a256302921&w=900  )",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold font-serif text-white ">TheTastyTimes</h1>
      <p className="mb-5 font-serif text-white ">
        Join With Us
      </p>
      <Link to='/contact' >
       <button className="btn font-serif  ">Contact</button>
      </Link>
   
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;