import './Header.css'
import Clock from "../../assets/icons/clock.svg?react";
import Location from "../../assets/icons/location.svg?react";
import Facebook from "../../assets/icons/facebook.svg?react";
import Instagram from "../../assets/icons/instagram.svg?react";
import LinkedIn from "../../assets/icons/linkedin.svg?react";
import YouTube from "../../assets/icons/youtube.svg?react";

export default function HeaderBanner(){
    return(
        <nav className="header__banner">
            <div className="wrapper">
                <div className="header__banner__info">
                    <p className="header__banner__work-time-info">
                        <Clock className="header__banner__logo"/>
                        Working: Monday - Friday, 9:00am - 5:00pm
                    </p>
                    <p className="header__banner__location ">
                        <Location className="header__banner__logo"/>
                        Huston, Wisconsin(WI), 54016
                    </p>
                </div>

                <menu className="header__banner__socials">
                    <li><a href="#" className="header__banner__social">
                        <Facebook className="header__banner__social__icon" />
                    </a></li>
                    <li><a href="#" className="header__banner__social">
                        <Instagram className="header__banner__social__icon" />    
                    </a></li>
                    <li><a href="#" className="header__banner__social">
                        <LinkedIn className="header__banner__social__icon" />    
                    </a></li>
                    <li><a href="#" className="header__banner__social">
                        <YouTube className="header__banner__social__icon" />    
                    </a></li>
                </menu>

            </div>
        </nav>
    );
}

