import './Banner.scss';
import BannerImg from '../../../assets/banner-img.png';

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>SÁNG MAI TÔI SẼ VỀ QUÊ LÚC 5H</p>
                    <div className="ctas">
                        <div className="banner-cta">Read more</div>
                        <div className="banner-cta v2">Read more</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
