import React from "react";
import '../works/works.css';
import Dapp from '../../assets/SafeEnviro-DAPP.png';
import Prtf1 from '../../assets/Lavishweb1.png';
import Prtf2 from '../../assets/OPA.png';
import Prtf3 from '../../assets/opa new.png';
import prtf4 from '../../assets/lemon&ginger.png';
import prtf5 from '../../assets/Cinnamon2.png';
import prtf6 from '../../assets/Cardomon2.png';
import prtf7 from '../../assets/CharithraHome.png';
import prtf8 from '../../assets/Home2.jpg';
import prtf9 from '../../assets/Home3.jpg';
import prtf10 from '../../assets/Home4.png';


// import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// // import 'swiper/core/free-mode';

// import {FreeMode, Pagination} from 'swiper/modules';
// import {RxArrowTopRight} from 'react-icons/rx';
// import { ServiceData } from "./constants";




const works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle"> Portfolio </h2>
            <span className="workDesc"></span>
            <div className="workImgs">
                <img src={Dapp} alt="" className="worksImg"></img>
                <img src={Prtf1} alt="" className="worksImg"></img>
                <img src={prtf7} alt="" className="worksImg"></img>
                <img src={prtf8} alt="" className="worksImg"></img>
                <img src={prtf9} alt="" className="worksImg"></img>
                <img src={prtf10} alt="" className="worksImg"></img>
                <img src={Prtf2} alt="" className="worksImg"></img>
                <img src={Prtf3} alt="" className="worksImg"></img>
                <img src={prtf4} alt="" className="worksImg"></img>
                <img src={prtf5} alt="" className="worksImg"></img>
                <img src={prtf6} alt="" className="worksImg"></img>
                
                
            </div>
        </section>

        // <div className="flex item-center justify-center flex-col h- screen bg-[#6c34af]">
        //     <Swiper
        //         breakpoints={{
        //             340: {
        //                 slidesPerView: 2,
        //                 spaceBetween: 15
        //             },
        //             700: {
        //                 slidesPerView: 3,
        //                 spaceBetween: 15
        //             }
        //         }}

        //         freeMode={true}
        //         pagination={{
        //             clickable: true
        //         }}
        //         modules={[FreeMode, Pagination]}
        //         className="= 'max-w-[90%] lg:max-w-[80%]" 
        //     >
        //         {ServiceData.map((item) => (
        //             <SwiperSlide key={item.title}>
        //                 <div className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg-w[350px]">

        //                 </div>
        //             </SwiperSlide>
        //         ))}
        //     </Swiper>
        // </div>
    );
}

export default works;