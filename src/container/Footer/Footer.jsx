import { FooterOverlay , Newsletter } from '../../components';
import { FiFacebook , FiTwitter , FiInstagram } from 'react-icons/fi';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => {
    return(
        <div className='app__footer section__padding'>
            <FooterOverlay/>
            <Newsletter/>
            <div className="app__footer-links">
                <div className="app__footer-links_contact">
                    <h1 className="app__footer-headtext">Contáctanos</h1>
                    <p className="p__opensans">La California Norte, Caracas - Venezuela</p>
                    <p className="p__opensans">+58 424-1234567</p>
                    <p className="p__opensans">+58 412-7654321</p>
                </div>
                <div className="app__footer-links_logo">
                    <img src={images.gericht} alt="logo" />
                    <p className="p__opensans">"La mejor manera de encontrarte es perderte en el servicio a otros"</p>
                    <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />
                    <div className="app__footer-links_icons">
                        <FiFacebook/>
                        <FiTwitter/>
                        <FiInstagram/>
                    </div>
                </div>
                <div className="app__footer-links_work">
                    <h1 className="app__footer-headtext">Horarios</h1>
                    <p className="p__opensans">Lunes-Viernes:</p>
                    <p className="p__opensans">08:00 am - 12:00 am</p>
                    <p className="p__opensans">Sábados-Domingos:</p>
                    <p className="p__opensans">07:00 am - 11:00 pm</p>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="p__opensans">2023 Geritch. Derechos reservados</p>
            </div>
        </div>
    )
};

export default Footer;