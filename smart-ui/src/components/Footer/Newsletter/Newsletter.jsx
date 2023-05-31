import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import './Newsletter.scss';

const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="big-text">hãy theo dõi chúng tôi để cập nhập nhiều sảng phẩm mới nhất </span>
                <div className="form">
                    <input type="text" placeholder="Email address" />
                    <button>Send mail</button>
                </div>
                <div className="text">Will be any more</div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
