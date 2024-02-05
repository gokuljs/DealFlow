import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';

const Carousel = (): JSX.Element => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        centerMode: true,
        centerPadding: '25px',
        arrows: false,
        slickPlay: true,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        autoplay: true
    };
    return (
        <div className='h-full w-[700px] my-0 mx-auto'>
            <div className='slider-container h-full relative py-8 pt-20'>
                <Slider
                    {...settings}
                    className='slider-container-carousel absolute inset-0 m-auto'
                >
                    <div className='slider-carousel'>
                        <Image
                            src='/invoice.svg'
                            width={180}
                            height={251}
                            className='rounded-2'
                            alt='invoice image'
                        />
                    </div>
                    <div className='slider-carousel'>
                        <Image
                            src='/invoice.svg'
                            width={180}
                            height={251}
                            className='rounded-2'
                            alt='invoice image'
                        />
                    </div>
                    <div className='slider-carousel'>
                        <Image
                            src='/invoice.svg'
                            width={180}
                            height={251}
                            className='rounded-2'
                            alt='invoice image'
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;
