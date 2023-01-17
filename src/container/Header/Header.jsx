import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => {
    return(
        <div className="app__header app__wrapper section__padding" id="home" >
            <div className="app__wrapper_info">
                <SubHeading title="Conoce el mejor sabor" />
                <h1 className="app__header-h1">La buena comida</h1>
                <p className="p__opensans" style={{margin: '2rem 0'}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt blanditiis! 
                    Optio est ab omnis voluptatum! Magnam labore a.
                </p>
                <button type="button" className='custom__button'>Explorar menú</button>
            </div>
            <div className="app__wrapper_img">
                <img src={images.welcome} alt="header img" />
            </div>
        </div>
    )
};

export default Header;