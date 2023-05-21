import React from 'react';
import './Footer.scss';

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from '../../assets/payments.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae repudiandae eveniet dolorem
                        libero nihil saepe, maiores culpa dolore omnis nisi, pariatur velit voluptatem iure mollitia.
                        Qui rem excepturi impedit illum!
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae repudiandae eveniet
                            dolorem libero nihil saepe
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0336 526 9311</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: phianhtuan31@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Sách tiếng anh</span>
                    <span className="text">Máy tính</span>
                    <span className="text">Đồ dùng học tập</span>
                    <span className="text">Điện thoại</span>
                    <span className="text">Giày dép</span>
                    <span className="text">Quần áo</span>
                </div>
                <div className="col">
                    <div className="title">Page</div>
                    <span className="text">home</span>
                    <span className="text">about</span>
                    <span className="text">Contact us</span>
                    <span className="text">facebook</span>
                    <span className="text">React JS</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">được tạo bởi TuanPA - Mẫu thiết kế mới nhất.</div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
