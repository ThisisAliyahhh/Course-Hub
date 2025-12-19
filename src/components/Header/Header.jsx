import HeaderBanner from './HeaderBanner'
import HeaderNavigation from './HeaderNavigation'


function Header(){

    return(

        <header className="header">
            <HeaderBanner />
            <HeaderNavigation />
        </header>
    );

}

export default Header