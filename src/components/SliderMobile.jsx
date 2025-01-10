import bgMobile from "../assets/images/bgMobile.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const SliderMobile = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat flex flex-col items-center h-[85h] py-8"
      style={{ backgroundImage: `url(${bgMobile})` }}
    >
      <h1 className="text-3xl font-bold text-white my-8">Presale Details</h1>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white w-[92vw] mb-10 flex flex-col justify-center items-center p-5 py-16 rounded-xl gap-5">
              <div className="bg-[#22A75D] w-[25vw] h-[25vw] rounded-t-full rounded-br-full rounded-bl-xl flex justify-center items-center text-3xl font-bold text-[#0F1320] shadow-lg shadow-[#167440] mb-5">
                <h2>Q1</h2>
              </div>

              <h2 className="flex flex-col justify-center items-center text-3xl font-bold">
                Phase One{" "}
                <p className="font-semibold text-lg">0/04/2021 - 16/04/2021</p>
              </h2>

              <p className="font-bold text-lg">1 BNB = 100000 WNTR</p>

              <p className="text-lg"> 
                Soft cap: <b> 5000 BNB</b> <br />
                Hard cap:<b> 10000 BNB</b>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white w-[92vw] mb-10 flex flex-col justify-center items-center p-5 py-16 rounded-xl gap-5">
              <div className="bg-[#2278D4] w-[25vw] h-[25vw] rounded-t-full rounded-br-full rounded-bl-xl flex justify-center items-center text-3xl font-bold text-[#0F1320] shadow-lg shadow-[#2278D4] mb-5">
                <h2>Q2</h2>
              </div>

              <h2 className="flex flex-col justify-center items-center text-3xl font-bold">
                Phase Two{" "}
                <p className="font-semibold text-lg">0/04/2021 - 16/04/2021</p>
              </h2>

              <p className="font-bold text-lg">1 BNB = 100000 WNTR</p>

              <p className="text-lg"> 
                Soft cap: <b> 5000 BNB</b> <br />
                Hard cap:<b> 10000 BNB</b>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white w-[92vw] mb-10 flex flex-col justify-center items-center p-5 py-16 rounded-xl gap-5">
              <div className="bg-[#FFD100] w-[25vw] h-[25vw] rounded-t-full rounded-br-full rounded-bl-xl flex justify-center items-center text-3xl font-bold text-[#0F1320] shadow-lg shadow-[#FFD100] mb-5">
                <h2>Q3</h2>
              </div>

              <h2 className="flex flex-col justify-center items-center text-3xl font-bold">
                Phase T{" "}
                <p className="font-semibold text-lg">0/04/2021 - 16/04/2021</p>
              </h2>

              <p className="font-bold text-lg">1 BNB = 100000 WNTR</p>

              <p className="text-lg"> 
                Soft cap: <b> 5000 BNB</b> <br />
                Hard cap:<b> 10000 BNB</b>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  );
};

export default SliderMobile;
