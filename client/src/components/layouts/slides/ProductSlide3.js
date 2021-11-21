import React,{useEffect, useState} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, Paper, Typography } from '@material-ui/core';
import {fetchSlideProductsByCategory2} from '../../../redux/slices/vendeurSlice';
import {useDispatch,useSelector} from 'react-redux'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import img from '../../../assets/images/cashondelivery.png'
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const ProductSlide3 = ({cat}) => {
// const [category, setCategory]=useState(cat)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchSlideProductsByCategory2(cat))
    },[])

 const { slideProductsByCategory2 } = useSelector(state => state.vendeur)


 slideProductsByCategory2 && console.log('cat b vet', slideProductsByCategory2)
    return (
        <React.Fragment>
            <Paper className="p-3 mb-2 d-flex flex-row align-items-center justify-content-between cursor-pointer">
                <Typography variant="h6">{cat}</Typography>
                <Link to="!#" role="button" className="text-decoration-none">Voir Plus</Link>
            </Paper>
            <Paper style={{ padding: '1%', marginBottom: '1%' }}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
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
                {
                    slideProductsByCategory2 && slideProductsByCategory2.map((res, i)=>(
                        <SwiperSlide key={i}>
                            <img src={__dirname + res.imgPrincipal} style={{ width: '60%' }} alt="img" />
                        </SwiperSlide>
                    ))
                }
                    

                </Swiper>
            </Paper>
        </React.Fragment>

    )
}

export default ProductSlide3
