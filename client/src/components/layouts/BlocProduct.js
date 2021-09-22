import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import img from '../../assets/images/cashondelivery.png'
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const styles = makeStyles((theme) => ({
    blocImage: {
        width: '100%',
    },
    allProduct:{
        padding: '1%',
        marginBottom: '1%',
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%',
       
    },
    singleProduct:{
        margin: '1%',
        '&:hover':{
            boxShadow: '0px 0px 6px -1px #000000',
        }
    },
    linkStyle:{
        textDecoration: 'none',
        color: 'black'
    },
    blocInfo:{
        padding: '2%',
    }
}))

const BlocProduct = () => {
    const classes = styles();
    return (
        <React.Fragment>
            <Grid >
                <Paper className="p-3 mb-2 d-flex flex-row align-items-center justify-content-between cursor-pointer">
                    <Typography variant="h6">Le plus vendu</Typography>
                    <Link to="!#" role="button" className="text-decoration-none">Voir Plus</Link>
                </Paper>
                <Paper style={{ padding: '1%', marginBottom: '1%' }}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={4}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: false }}
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
                    <SwiperSlide><img src={img} style={{ width: '60%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src={img} style={{ width: '60%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src={img} style={{ width: '60%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src={img} style={{ width: '60%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src={img} style={{ width: '60%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src={img} style={{ width: '60%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src={img} style={{ width: '60%' }} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src={img} style={{ width: '60%' }} alt="img" /></SwiperSlide>

                </Swiper>
            </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default BlocProduct
