import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, Paper, Typography } from '@material-ui/core';
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
        <React.Fragment>
            <Paper className="p-3 mb-2 d-flex flex-row align-items-center justify-content-between cursor-pointer">
                <Typography variant="h6">Le plus vendu</Typography>
                <Link to="!#" role="button" className="text-decoration-none">Voir Plus</Link>
            </Paper>
            <Paper style={{padding: '1%', marginBottom: '1%'}}>
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
                    <SwiperSlide><img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" style={{ width: '80%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" style={{ width: '80%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" style={{ width: '80%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" style={{ width: '80%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" style={{ width: '80%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" style={{ width: '80%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" style={{ width: '80%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" style={{ width: '80%' }} alt="img" /></SwiperSlide>

                </Swiper>

            </Paper>
        </React.Fragment>
    )
}

export default ProductSlide
