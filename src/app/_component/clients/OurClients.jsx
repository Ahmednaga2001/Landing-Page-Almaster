'use client';

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import "./swiper.css"

// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import tcmgImg from "../../_images/tcmg.png";
import commImg from "../../_images/talat.jpg"
import talaImg from "../../_images/talat.jpg"
// import Image from 'next/image';

// export default function OurClients() {
//   return (
//     <div className="container mx-auto px-4">
//       {/* <h2>clients</h2> */}
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         navigation = {true}
//         pagination={{
//           type: 'bullets',
//           clickable: true,
//         }}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         speed={800}
//         loop={true}
//         modules={[Pagination, Autoplay , Navigation]}
//       >
//         <SwiperSlide>
//           <Image src={tcmgImg} alt="Client Logo" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={tcmgImg} alt="Client Logo" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={tcmgImg} alt="Client Logo" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={tcmgImg} alt="Client Logo" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function OurClients() {
  return (
    <>
   <div className='cliens  bg-primary'>
    <div className="container mx-auto py-[80px]">
    <h2 className='text-center text-[32px] text-text font-bold'>عملائنا</h2>

    <Swiper
    //  navigation
        spaceBetween={30}
        centeredSlides={true}
        loop = {true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        

        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          }}}
        modules={[Pagination , Navigation , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-md"> 
          <Image src={tcmgImg} className="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={commImg} className="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={talaImg} className="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={tcmgImg} className="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={commImg} className="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={talaImg} className="img"/>
        </SwiperSlide>
        
      </Swiper>

    </div>

   </div>
    </>
  );
}

