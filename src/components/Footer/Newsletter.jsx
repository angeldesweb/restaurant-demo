import { SubHeading } from '..';
import './Newsletter.css';

const Newsletter = () => (
    <div className="app__newsletter">
        <div className="app__newsletter-heading">
            <SubHeading title="Boletín" />
            <h1 className="headtext__cormorant">Subscríbete a nuestro boletín</h1>
            <p className="p__opensans">Y no te pierdas nuestras actualizaciones</p>
        </div>

        <div className="app__newsletter-input flex__center">
            <input type="email" name="" id="" placeholder="Ingresa tu correo electrónico" />
            <button className="custom__button">Subscríbeme</button>
        </div>
    </div>
);

export default Newsletter;