



const InfoBanner = () => {

    return (
        <div>

        <div
          className="hero min-h-screen bg-fixed "
          style={{
            backgroundImage: "url(  https://img.freepik.com/premium-photo/plate-vibrant-chicken-biryani-with-grilled-chicken-legs-fresh-herbs-yogurt-sauce-curry_621955-39006.jpg?w=740  )",
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white font-serif ">TheTastyTimes</h1>
              <p className="mb-5 text-white font-serif ">
              Food is a universal language that brings people together, and a delicious meal can evoke emotions and create lasting memories. When it comes to tasty food, people have different preferences, but some dishes stand out as universally loved. For some, it's a juicy burger with crispy bacon and melted cheese, while for others, it's a steaming bowl of noodles or a flavorful curry.
              </p>
              <div>
                <button className=" btn font-serif ">Read More</button>
              </div>
            </div>
          </div>
        </div>


        <div className=" mt-20  mb-10">

           <p className=" text-center font-serif text-6xl border-[1px] border-green-500 p-5">Call Us: +8801950374409</p>

        </div>
            
        </div>
    );
};

export default InfoBanner;