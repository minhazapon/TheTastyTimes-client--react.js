// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const Order = () => {
    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">

            <div>


            <div className=" flex justify-center">
                <div className=" flex items-center gap-5">
                    <p className=" clear-start text-center text-5xl  font-serif">Order Your Food</p>
                    <img className=" h-[100px]" src="https://cdn-icons-gif.flaticon.com/11324/11324204.gif" alt="" />
                </div>
            </div>


           
            {/* ------------------------------------------ */}

            <div>





            <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
                <div className=' flex justify-center'>
                    <div>
                        <img className=' rounded-xl h-[400px] w-[400px]' src="https://img.freepik.com/free-photo/delicious-lobster-gourmet-seafood_23-2151713033.jpg?t=st=1728120944~exp=1728124544~hmac=3eedf7082e29df3e1c1c5beb8612e9fea1a6b1367f3262635b009d04718027fc&w=740" alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=' flex justify-center' >
                    <div>
                        <img className=' rounded-xl h-[400px] w-[400px]' src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?t=st=1728121145~exp=1728124745~hmac=5b753b1a041e5eeda298a49a5aca0dd019a417b815dfe779391d0e1eb22b75c6&w=740" alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=' flex justify-center'>
                    <div>
                        <img className=' rounded-xl h-[400px] w-[400px]' src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?t=st=1728121168~exp=1728124768~hmac=4687d77f34f09984e562c8abeff9fae34f5a665b0a489b843eae0f7849d62d85&w=740" alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=' flex justify-center'>
                    <div>
                        <img className=' rounded-xl h-[400px] w-[400px]' src="https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?t=st=1728120990~exp=1728124590~hmac=b5a8d0202d77249f248eab306c46c009a9ac5e53ad6d3a12d5f16ffc4638d8f3&w=740" alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=' flex justify-center'>
                    <div>
                        <img className=' rounded-xl h-[400px] w-[400px]' src="https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?t=st=1728121135~exp=1728124735~hmac=15cf030b3e4f083acf48684e48ef2ad57e69427839e045f3079651e8eaaf37f2&w=740" alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=' flex justify-center'>
                    <div>
                        <img className=' rounded-xl h-[400px] w-[400px]' src="https://img.freepik.com/premium-photo/grilled-chicken-wings-accompanied-by-golden-onion-rings-parsley_1003619-5644.jpg?w=740" alt="" />
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
            </>

            </div>

            </div>
            
        </div>
    );
};

export default Order;