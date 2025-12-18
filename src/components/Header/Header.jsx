import HeaderBanner from './HeaderBanner'
import HeaderNavigation from './HeaderNavigation'


function Header(){

    return(

        <header className="header">
            <div className="wrapper">
                <HeaderBanner />
                <HeaderNavigation />
            </div>
        </header>
    );

}

export default Header