import "./Footer.css"
import Location from "../../assets/icons/location.svg?react";
import Phone from "../../assets/icons/phone.svg?react";
import Mail from "../../assets/icons/mail.svg?react";
import Logo from "../../assets/icons/footer-logo.svg?react";
import Facebook from "../../assets/icons/facebook.svg?react";
import Instagram from "../../assets/icons/instagram.svg?react";
import Pinterest from "../../assets/icons/pinterest.svg?react";
import Twitter from "../../assets/icons/twitter.svg?react";
import Angle from "../../assets/icons/angle.svg?react";
import Gallery from "../../assets/images/gallery.png";
import Gallery1 from "../../assets/images/gallery1.png";
import Gallery2 from "../../assets/images/gallery2.png";
import Gallery3 from "../../assets/images/gallery3.png";
import Gallery4 from "../../assets/images/gallery4.png";
import Gallery5 from "../../assets/images/gallery5.png";
import Button from "../Button/Button.jsx";

export default function Footer() {
    const year = new Date().getFullYear();

    return(
        <footer className="footer">
            <div className="wrapper">
                <address className="footer__address">
                    <div className="footer__contact">
                        <div className="footer__contact__icon__container">
                            <Location className="footer__contact__icon"/>
                        </div>
                        <div className="footer__contact__text">
                            <p className="footer__contact__method">Address: </p>
                            <p className="footer__contact__info">1925 Boggess Street</p>
                        </div>
                    </div>

                    <div className="footer__divider"></div>

                    <div className="footer__contact">
                        <div className="footer__contact__icon__container">
                            <Phone className="footer__contact__icon" />
                        </div>
                        <div className="footer__contact__text">
                            <p className="footer__contact__method">Phone: </p>
                            <p className="footer__contact__info">(00) 875 784 568</p>
                        </div>
                    </div>

                    <div className="footer__divider"></div>

                    <div className="footer__contact">
                        <div className="footer__contact__icon__container">
                            <Mail className="footer__contact__icon" />
                        </div>

                        <div className="footer__contact__text">
                            <p className="footer__contact__method">Email: </p>
                            <p className="footer__contact__info">info@gmail.com</p>
                        </div>
                    </div>
                </address>
            </div>
            <div className="footer__address__divider"></div>

            <div className="wrapper">
                <section className="footer__links" >
                    <section className="footer__summary">
                        <Logo className="footer__summary__logo"/>

                        <div className="footer__summary__text">
                            <p>Interdum velit laoreet id donec ultrices <br /> tincidunt arcu. Tincidunt tortor aliqua <br /> mfacilisi cras fermentum odio eu.</p>
                        </div>

                        <ul className="footer__summary__socials">
                            <li><a href="#" className="footer__summary__social">
                                <Facebook />
                            </a></li>
                            <li><a href="#" className="footer__summary__social">
                                <Instagram />
                            </a></li>
                            <li><a href="#" className="footer__summary__social">
                                <Pinterest />
                            </a></li>
                            <li><a href="#" className="footer__summary__social">
                                <Twitter />
                            </a></li>
                        </ul>


                    </section>

                    <section className="footer__about">
                        <section className="footer__services">
                            <p className="footer__heading">Our Services: </p>
                            <ul className="footer__services__list">
                                <li><a href="#" className="footer_services__service">
                                    <Angle className="footer_services__service__logo" /> Web Development   
                                </a></li>
                                <li><a href="#" className="footer_services__service">
                                    <Angle className="footer_services__service__logo"/> UI/UX Design   
                                </a></li>
                                <li><a href="#" className="footer_services__service">
                                    <Angle className="footer_services__service__logo"/> Management   
                                </a></li>
                                <li><a href="#" className="footer_services__service">
                                    <Angle className="footer_services__service__logo"/> Digital Marketing  
                                </a></li>
                                <li><a href="#" className="footer_services__service">
                                    <Angle className="footer_services__service__logo"/> Blog News   
                                </a></li>
                            </ul>
                        </section>
                        <section className="footer__gallery">
                            <p className="footer__heading">Gallery</p>
                            <div className="footer__gallery__images">
                                <img src={Gallery} alt="people reading" className="footer__gallery__image" width={60}/>
                                <img src={Gallery1} alt="people reading" className="footer__gallery__image" width={60}/>
                                <img src={Gallery2} alt="people reading" className="footer__gallery__image" width={60}/>
                                <img src={Gallery3} alt="people reading" className="footer__gallery__image" width={60}/>
                                <img src={Gallery4} alt="people reading" className="footer__gallery__image" width={60}/>
                                <img src={Gallery5} alt="people reading" className="footer__gallery__image" width={60}/>
                            </div>
                        </section>

                    </section>
                    <section className="footer__subscribe">
                        <p className="footer__heading">Subscribe</p>
                        <input type="email" placeholder="Enter your email:" className="footer__input" />
                        <Button title="Subscribe Now" />
                    </section>
                </section>
            </div>

            <p className="footer__copyright">Copyright &copy; {year} <a href="#" className="footer__copyright__link">edunity</a> || All Right Reserved</p>
        </footer>
    );
}