import React from "react";
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Routes, Route, Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Detail from "./Detail";

class ListNew extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    {/* Trend */}
                    <div className="new-trending">
                    <div className="row">
                        <div className="col-8">
                        <div className="trend-top mb-4">
                            <img src="https://themewagon.github.io/aznews/assets/img/trending/trending_top.jpg" />
                            <div className="trend-top-cap">
                            <span>Appetizers</span>
                            <h2>
                                <Link to="/detail">
                                Chào mừng sự trở lại của nhóm <br /> nhạc người Mỹ
                                </Link>
                            </h2>
                            </div>
                        </div>
                        <div className="trend-bottom">
                            <div className="row">
                            <div className="col-4">
                                <div className="trend-bottom-img mb-3">
                                <img
                                    src="https://themewagon.github.io/aznews/assets/img/trending/trending_bottom1.jpg"
                                    alt=""
                                />
                                </div>
                                <div className="trend-bottom-cap">
                                <span className="color1">Lifestyple</span>
                                <h4>
                                    <a href="./detail.html">
                                    Cách kinh doanh mới, tìm hiểu ngay.”
                                    </a>
                                </h4>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="trend-bottom-img mb-3">
                                <img
                                    src="https://themewagon.github.io/aznews/assets/img/trending/trending_bottom2.jpg"
                                    alt=""
                                />
                                </div>
                                <div className="trend-bottom-cap">
                                <span className="color2">Sports</span>
                                <h4>
                                    <a href="./detail.html">
                                    Cuộc tái ngộ của 2 ngôi sao lớn.”
                                    </a>
                                </h4>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="trend-bottom-img mb-3">
                                <img
                                    src="https://themewagon.github.io/aznews/assets/img/trending/trending_bottom3.jpg"
                                    alt=""
                                />
                                </div>
                                <div className="trend-bottom-cap">
                                <span className="color3">Travels</span>
                                <h4>
                                    <a href="./detail.html">
                                    Các địa điểm nổi bật dành cho cặp đôi.”
                                    </a>
                                </h4>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-4">
                        <div className="trend-right d-flex">
                            <div className="trend-right-img">
                            <img
                                src="https://themewagon.github.io/aznews/assets/img/trending/right1.jpg"
                                alt=""
                            />
                            </div>
                            <div className="trend-right-cap">
                            <span className="color1">Concert</span>
                            <h4>
                                <a href="./detail.html">Bang nhạc lớn sắp trở lại</a>
                            </h4>
                            </div>
                        </div>
                        <div className="trend-right d-flex">
                            <div className="trend-right-img">
                            <img
                                src="https://themewagon.github.io/aznews/assets/img/trending/right2.jpg"
                                alt=""
                            />
                            </div>
                            <div className="trend-right-cap">
                            <span className="color3">Sea Beach</span>
                            <h4>
                                <a href="#">Động vật biển mới được khám phá</a>
                            </h4>
                            </div>
                        </div>
                        <div className="trend-right d-flex">
                            <div className="trend-right-img">
                            <img
                                src="https://themewagon.github.io/aznews/assets/img/trending/right3.jpg"
                                alt=""
                            />
                            </div>
                            <div className="trend-right-cap">
                            <span className="color2">Bike Show</span>
                            <h4>
                                <a href="#">Chiếc xe địa hình mới ra mắt</a>
                            </h4>
                            </div>
                        </div>
                        <div className="trend-right d-flex">
                            <div className="trend-right-img">
                            <img
                                src="https://themewagon.github.io/aznews/assets/img/trending/right4.jpg"
                                alt=""
                            />
                            </div>
                            <div className="trend-right-cap">
                            <span className="color4">See Beach</span>
                            <h4>
                                <a href="#">Một môn thể thao mới sẽ xuất hiện ?</a>
                            </h4>
                            </div>
                        </div>
                        <div className="trend-right d-flex">
                            <div className="trend-right-img">
                            <img
                                src="https://themewagon.github.io/aznews/assets/img/trending/right5.jpg"
                                alt=""
                            />
                            </div>
                            <div className="trend-right-cap">
                            <span className="color1">Skeping</span>
                            <h4>
                                <a href="#">Môn thể thao mạo hiểm giữa trời đông</a>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* / Trend */}
                    {/* Weekly */}
                    <div className="new-weekly mt-4">
                    <div className="new-heading-text mb-4">
                        <h3>Tin nổi bật trong tuần</h3>
                    </div>
                    <div className="new-weekly-content">
                        <Swiper
                        // install Swiper modules
                        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        autoplay={{
                            delay: 3000,
                            
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="new-weekly-item">
                                <div className="new-weekly-item_img">
                                <img
                                    src="https://themewagon.github.io/aznews/assets/img/news/weeklyNews2.jpg"
                                    alt=""
                                />
                                </div>
                                <div className="new-weekly-item_caption">
                                <span className="color1">Strike</span>
                                <h4>
                                    <a href="./detail.html" tabIndex={-1}>
                                    Cuộc vận động ủng hộ học tập
                                    </a>
                                </h4>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="swiper-slide">
                            <div className="new-weekly-item">
                                <div className="new-weekly-item_img">
                                <img
                                    src="https://themewagon.github.io/aznews/assets/img/news/weeklyNews1.jpg"
                                    alt=""
                                />
                                </div>
                                <div className="new-weekly-item_caption">
                                <span className="color1">Strike</span>
                                <h4>
                                    <a href="./detail.html" tabIndex={-1}>
                                    Lễ hội của một dân tộc châu phi
                                    </a>
                                </h4>
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="new-weekly-item">
                                    <div className="new-weekly-item_img">
                                    <img
                                        src="https://themewagon.github.io/aznews/assets/img/news/weeklyNews3.jpg"
                                        alt=""
                                    />
                                    </div>
                                    <div className="new-weekly-item_caption">
                                    <span className="color1">Music</span>
                                    <h4>
                                        <a href="./detail.html" tabIndex={-1}>
                                        Biểu diễn ngoài đường phố tại Anh
                                        </a>
                                    </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="new-weekly-item">
                                <div className="new-weekly-item_img">
                                <img
                                    src="https://themewagon.github.io/aznews/assets/img/news/weeklyNews3.jpg"
                                    alt=""
                                />
                                </div>
                                <div className="new-weekly-item_caption">
                                <span className="color1">Music</span>
                                <h4>
                                    <a href="./detail.html" tabIndex={-1}>
                                    Biểu diễn ngoài đường phố tại Anh
                                    </a>
                                </h4>
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        </Swiper>
                        
                    </div>
                    </div>
                    {/* / Weekly */}
                    {/* What new */}
                    <div className="new-what mt-4">
                    <div className="row">
                        <div className="col-8">
                        <div className="row d-flex justify-content-between">
                            <div className="col-lg-3 col-md-3">
                            <div className="section-tittle mb-3">
                                <h3>Tin tức mới</h3>
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                            <div className="properties__button">
                                {/*Nav Button  */}
                                <nav>
                                <div
                                    className="nav nav-tabs select-list"
                                    id="nav-tab"
                                    role="tablist"
                                >
                                    <a
                                    className="nav-item nav-link active show"
                                    id="nav-home-tab"
                                    data-toggle="tab"
                                    href="#nav-home"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                    >
                                    Tất cả
                                    </a>
                                    <a
                                    className="nav-item nav-link"
                                    id="nav-profile-tab"
                                    data-toggle="tab"
                                    href="#nav-profile"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                    >
                                    Cuộc sống
                                    </a>
                                    <a
                                    className="nav-item nav-link"
                                    id="nav-contact-tab"
                                    data-toggle="tab"
                                    href="#nav-contact"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                    >
                                    Du lịch
                                    </a>
                                    <a
                                    className="nav-item nav-link"
                                    id="nav-last-tab"
                                    data-toggle="tab"
                                    href="#nav-last"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                    >
                                    Thời trang
                                    </a>
                                    <a
                                    className="nav-item nav-link"
                                    id="nav-Sports"
                                    data-toggle="tab"
                                    href="#nav-nav-Sport"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                    >
                                    Thể thao
                                    </a>
                                </div>
                                </nav>
                                {/*End Nav Button  */}
                            </div>
                            </div>
                        </div>
                        <div className="whats-news-caption">
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="single-what-news mb-100">
                                <div className="what-img">
                                    <img
                                    src="https://themewagon.github.io/aznews/assets/img/news/whatNews1.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="what-cap">
                                    <span className="color1">Night party</span>
                                    <h4>
                                    <a href="./detail.html">
                                        Âm nhạc sôi động ở một Party ven biển
                                    </a>
                                    </h4>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-what-news mb-100">
                                <div className="what-img">
                                    <img
                                    src="https://themewagon.github.io/aznews/assets/img/news/whatNews2.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="what-cap">
                                    <span className="color1">Night party</span>
                                    <h4>
                                    <a href="./detail.html">
                                        Sinh viên nên tuân thủ giờ lên lớp
                                    </a>
                                    </h4>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-what-news mb-100">
                                <div className="what-img">
                                    <img
                                    src="https://themewagon.github.io/aznews/assets/img/news/whatNews3.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="what-cap">
                                    <span className="color1">Night party</span>
                                    <h4>
                                    <a href="./detail.html">
                                        Khoảnh khắc chờ đợi sự kiện lớn
                                    </a>
                                    </h4>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-what-news mb-100">
                                <div className="what-img">
                                    <img
                                    src="https://themewagon.github.io/aznews/assets/img/news/whatNews4.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="what-cap">
                                    <span className="color1">Night party</span>
                                    <h4>
                                    <a href="./detail.html">
                                        Đi du lịch ven biển vào tháng 6
                                    </a>
                                    </h4>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-4">
                        <div className="section-tittle">
                            <h3 style={{ marginBottom: 40 }}>Follow Us</h3>
                        </div>
                        <div className="single-follow mb-5">
                            <div className="single-box">
                            <div className="follow-us d-flex align-items-center">
                                <div className="follow-social">
                                <a href="#">
                                    <img
                                    src="https://themewagon.github.io/aznews/assets/img/news/icon-fb.png"
                                    alt=""
                                    />
                                </a>
                                </div>
                                <div className="follow-count">
                                <span>8,045</span>
                                <p>Fans</p>
                                </div>
                            </div>
                            <div className="follow-us d-flex align-items-center">
                                <div className="follow-social">
                                <a href="#">
                                    <img
                                    src="https://themewagon.github.io/aznews/assets/img/news/icon-tw.png"
                                    alt=""
                                    />
                                </a>
                                </div>
                                <div className="follow-count">
                                <span>8,045</span>
                                <p>Fans</p>
                                </div>
                            </div>
                            <div className="follow-us d-flex align-items-center">
                                <div className="follow-social">
                                <a href="#">
                                    <img
                                    src="https://themewagon.github.io/aznews/assets/img/news/icon-ins.png"
                                    alt=""
                                    />
                                </a>
                                </div>
                                <div className="follow-count">
                                <span>8,045</span>
                                <p>Fans</p>
                                </div>
                            </div>
                            <div className="follow-us d-flex align-items-center">
                                <div className="follow-social">
                                <a href="#">
                                    <img
                                    src="https://themewagon.github.io/aznews/assets/img/news/icon-yo.png"
                                    alt=""
                                    />
                                </a>
                                </div>
                                <div className="follow-count">
                                <span>8,045</span>
                                <p>Fans</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="news-poster d-none d-lg-block">
                            <img
                            src="https://themewagon.github.io/aznews/assets/img/news/news_card.jpg"
                            alt=""
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* What new */}
                </div>
            </div>

        )
    }
}

export default ListNew