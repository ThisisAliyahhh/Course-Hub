import './Footer.css'

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();


    return(
        <footer className="footer">
            <address className="footer__address">
                <div className='footer__contact'></div>
            </address>

            <p className="footer__copyright">Copyright &copy; {year} <a href="#" className='footer__copyright__link'>edunity</a> || All Right Reserved</p>
        </footer>
    );
}