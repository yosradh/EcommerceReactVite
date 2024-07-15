import React from 'react';
import './HeroStyle.css';
import { FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


export default function Hero() {

    const Collection = [
        { text: "WOMEN", image: "./Banner/banner-25.jpg" },
        { text: "MEN", image: "./Banner/banner-15.jpg" },
    ]
    return (
        <>
            <div className="HeroContainer" >
                <div className="LeftSection">
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        {Collection.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.image} alt="" />
                                <div className="TexteBanner1">
                                    <p>LIFESTYLE COLLECTION </p>
                                    <p className="StyleBold">{item.text} </p>
                                    <p>SALE UP TO <span style={{ color: 'red' }}>30% OFF</span> </p><br />
                                    <p style={{ fontWeight: '40', fontSize: '14px' }}>Get Free Shipping on orders over 100dt</p><br />
                                    <button className="ButtonShop">Shop Now <br /></button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="RightSection">
                    <div >
                        <img src="./Banner/banner-16.jpg" alt="" />
                        <div className="TexteBanner1">
                            <p>NEW PRRIVALS </p>
                            <p className="StyleBold"> SUMMER SALE 20% OFF </p><br />
                            <p className="BtnShop">Shop Now <FaAngleRight /> <br /></p>
                        </div>
                    </div>

                    <div className="Banner">
                        <img src="./Banner/banner-17.jpg" alt="" />
                        <div className="TexteBanner1">
                            <p>NEW PRRIVALS <br /></p>
                            <p className="StyleBold"> SUMMER SALE 20% OFF </p><br />
                            <p className="BtnShop">Shop Now <FaAngleRight /> <br /></p>
                        </div>
                    </div>
                </div>
            
            
            

            </div>

        </>
    )
}