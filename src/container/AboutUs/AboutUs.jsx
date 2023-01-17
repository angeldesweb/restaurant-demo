import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
    <div>
        <div className="app__aboutus app__bg flex__center section__padding" id="about">
            <div className="app__aboutus-overlay flex__center">
                <img src={images.G} alt="g letter" />
            </div>
            <div className="app__aboutus-content flex__center">
                <div className="app__aboutus-content_about">
                    <h1 className="headtext__cormorant">Sobre nosotros</h1>
                    <img src={images.spoon} alt="about spoon" className="spoon__img" />
                    <p className="p__opensans">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt blanditiis! 
                        Optio est ab omnis voluptatum! Magnam labore a.
                    </p>
                    <button className="custom__button">Saber más</button>
                </div>
                <div className="app__aboutus-content_knife flex__center">
                    <img src={images.knife} alt="about knife" />
                </div>
                <div className="app__aboutus-content_history">
                    <h1 className="headtext__cormorant">Historia</h1>
                    <img src={images.spoon} alt="about spoon" className="spoon__img" />
                    <p className="p__opensans">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt blanditiis! 
                        Optio est ab omnis voluptatum! Magnam labore a.
                    </p>
                    <button className="custom__button">Saber más</button>
                </div>

            </div>
        </div>
    </div>
);

export default AboutUs;