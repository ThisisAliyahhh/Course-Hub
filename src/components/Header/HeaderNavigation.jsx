import './Header.css'
import Logo from '../../assets/icons/logo.svg?react';
import Button from '../Button/Button.jsx';


export default function HeaderNavigation (){
    return(
        <nav className="header__navigation">
            <div className="wrapper">
               <Logo /> 

               <menu className="header__navigation__pages">
                    <li><a href="#" className="header__navigation__page">
                        Home
                    </a></li>
                    <li><a href="#" className="header__navigation__page">
                        About Us
                    </a></li>
                    <li><a href="#" className="header__navigation__page">
                        Courses
                    </a></li>
                    <li><a href="#" className="header__navigation__page">
                        Pages
                    </a></li>
                    <li><a href="#" className="header__navigation__page">
                        Blog
                    </a></li>
                    <li><a href="#" className="header__navigation__page">
                        Contact
                    </a></li>
               </menu>

               <Button title="Sign-in / Login " varient="primary" />
            </div>
        </nav>
    );
}