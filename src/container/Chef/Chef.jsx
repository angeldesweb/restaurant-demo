import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
    <div className='app__bg app__wrapper section__padding'>
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef" />
        </div>
        <div className="app__wrapper_info">
            <SubHeading title="Dice el chef" />
            <h1 className='headtext__cormorant'>¿En qué creemos?</h1>
            <div className="app__chef-content">
                <div className="app__chef-content_quote">
                    <img src={images.quote} alt="quote" />
                    <p className="p__opensans">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <p className="p__opensans">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt blanditiis! 
                    Optio est ab omnis voluptatum! Magnam labore a.
                </p>
            </div>
            <div className="app__chef-sign">
                <p>Kevin Luo</p>
                <p className="p__opensans">Chef fundador</p>
                <img src={images.sign} alt="sign" />
            </div>
        </div>
    </div>
);

export default Chef;