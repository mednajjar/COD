import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../styles';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import { slide1, slide2, slide3 } from '../../../assets';

const items = [
  {
    src: slide1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: slide2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: slide3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const HeaderCarousal = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      
      <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
      >

        <Link to="/">
          <img src={item.src} alt={item.altText} style={{ width: '100%', height: 'auto' }} />
        </Link>
      </CarouselItem>

);
});

const classes = useStyles()
return (

    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className={classes.carouselHeader}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
      <CarouselControl direction="next" directionText=" " onClickHandler={next} />
    </Carousel>


  );
}

export default HeaderCarousal;