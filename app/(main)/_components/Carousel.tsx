'use client';
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';
import clsx from 'clsx';

const Carousel = (): JSX.Element => {
    const [centerSlide, setCenterSlide] = useState<number>(1);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        lazyload: true,
        autoplay: false,
        arrows: false,
        slickPlay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        cssEase: 'linear',
        beforeChange: (currentSlide: number, nextSlide: number) => {
            const totalSlides = 3; // Total number of slides
            const centerSlideIndex = (nextSlide + 1) % totalSlides;
            setCenterSlide(centerSlideIndex);
        }
    };

    console.log(centerSlide, 'ssss');

    return (
        <div className='h-full w-[700px] mt-20 my-0 mx-auto'>
            <Slider {...settings}>
                <div
                    className={clsx(
                        'carousel-card',
                        centerSlide === 0 && 'center'
                    )}
                >
                    <Image
                        src='/invoice.svg'
                        width={160}
                        height={251}
                        className='rounded-4 non-active-card'
                        alt='image'
                    />
                </div>
                <div
                    className={clsx(
                        'carousel-card',
                        centerSlide === 1 && 'center'
                    )}
                >
                    <Image
                        src='/invoice.svg'
                        width={160}
                        height={251}
                        className='rounded-4'
                        alt='image'
                    />
                </div>
                <div
                    className={clsx(
                        'carousel-card',
                        centerSlide === 2 && 'center'
                    )}
                >
                    <Image
                        src='/invoice.svg'
                        width={160}
                        height={251}
                        className='rounded-4 non-active-card'
                        alt='image'
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
