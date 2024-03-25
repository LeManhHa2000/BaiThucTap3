function Footer() {
    return (
        <div className="footer">
            <div className="footer-area footer-padding fix">
                <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12">
                    <div className="single-footer-caption">
                        <div className="single-footer-caption">
                        {/* logo */}
                        <div className="footer-logo">
                            <a href="#">Tin tức dạo</a>
                        </div>
                        <div className="footer-tittle">
                            <div className="footer-pera">
                            <p>
                                Chúng tôi sẽ luôn cố gắng đưa những thông tin mới nhất ,
                                nhanh nhất và tin cậy nhất đên với người đọc. Mong rằng mọi
                                người sẽ luôn ủng hộ những tin tức mới nhất từ phía website
                                của chúng tôi.
                            </p>
                            </div>
                        </div>
                        {/* social */}
                        <div className="footer-social">
                            <a href="#">
                            <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                            <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                            <i className="fab fa-pinterest-p" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4  col-sm-6">
                    <div className="single-footer-caption mt-60">
                        <div className="footer-tittle">
                        <h4>Newsletter</h4>
                        <p>Heaven fruitful doesn't over les idays appear creeping</p>
                        {/* Form */}
                        <div className="footer-form d-flex">
                            <input type="text" placeholder=" Email Address " />
                            <div className="form-icon">
                            <button
                                type="submit"
                                name="submit"
                                id="newsletter-submit"
                                className="email_icon newsletter-submit button-contactForm"
                            >
                                <img
                                src="https://themewagon.github.io/aznews/assets/img/logo/form-iocn.png"
                                alt=""
                                />
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                    <div className="single-footer-caption mb-50 mt-60">
                        <div className="footer-tittle">
                        <h4>Instagram Feed</h4>
                        </div>
                        <div className="instagram-gellay">
                        <ul className="insta-feed">
                            <li>
                            <a href="#">
                                <img
                                src="https://themewagon.github.io/aznews/assets/img/post/instra1.jpg"
                                alt=""
                                />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <img
                                src="https://themewagon.github.io/aznews/assets/img/post/instra2.jpg"
                                alt=""
                                />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <img
                                src="https://themewagon.github.io/aznews/assets/img/post/instra3.jpg"
                                alt=""
                                />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <img
                                src="https://themewagon.github.io/aznews/assets/img/post/instra4.jpg"
                                alt=""
                                />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <img
                                src="https://themewagon.github.io/aznews/assets/img/post/instra5.jpg"
                                alt=""
                                />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <img
                                src="https://themewagon.github.io/aznews/assets/img/post/instra6.jpg"
                                alt=""
                                />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Footer