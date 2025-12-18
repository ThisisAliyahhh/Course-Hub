import './Header.css'

export default function HeaderBanner(){
    return(
        <nav className="header__banner">
            <div className="header__banner__info">
                <p className="header__banner__work-time-info"><span className="header__banner__logo"></span>Working: Monday - Friday, 9:00am - 5:00pm</p>
                <p className="header__banner__location "><span className="header__banner__logo"></span>Huston, Wisconsin(WI),54016</p>
            </div>

            <menu className="header__banner__socials">
                <li className="header__banner__social facebook"></li>
                <li className="header__banner__social instagram"></li>
                <li className="header__banner__social linkedin"></li>
                <li className="header__banner__social youtube"></li>
            </menu>
        </nav>
    );
}