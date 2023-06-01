// import BannerImg from '../../../assets/banner-img.png';
import Button from '../../Button/Button';

import './Banner.scss';
const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>Đừng bỏ lõ cơ hội này nhé 🧐</p>
                    <div className="ctas">
                        <Button className="banner-cta" href="https://facebook.com/tuanpa2002" target="_blank">
                            Read more
                        </Button>
                        <Button className="banner-cta v2" to="./link-test">
                            Link nội bộ
                        </Button>
                    </div>
                </div>
                {/* <img className="banner-img" src={BannerImg} alt="" /> */}
            </div>
        </div>
    );
};

export default Banner;
