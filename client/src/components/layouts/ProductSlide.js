import React from 'react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import test from './banner.png'

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const ProductSlide = () => {

    return (


        <Swiper
            spaceBetween={0}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            style={{ textAlign: 'center' }}
            breakpoints={{
                // when window width is >= 640px
                240: {

                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                }
            }}
        >
            <SwiperSlide><img src={test} alt /></SwiperSlide>
            <SwiperSlide><img src={test} alt /></SwiperSlide>
            <SwiperSlide><img src={test} alt /></SwiperSlide>
            <SwiperSlide><img src={test} alt /></SwiperSlide>
            <SwiperSlide><img src={test} alt /></SwiperSlide>
            <SwiperSlide><img src={test} alt /></SwiperSlide>
            <SwiperSlide><img src={test} alt /></SwiperSlide>
            <SwiperSlide><img src={test} alt /></SwiperSlide>

        </Swiper>



    )
}

export default ProductSlide
