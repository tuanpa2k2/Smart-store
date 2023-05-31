import { MdClose } from 'react-icons/md';
import prod from '../../../assets/products/earbuds-prod-1.webp';

import './Search.scss';
const Search = ({ setShowSearch }) => {
    return (
        <div className="search-model">
            <div className="form-field">
                <input type="text" autoFocus placeholder="Search for product..." />
                <MdClose onClick={() => setShowSearch(false)} />
            </div>

            <div className="search-result-content">
                <div className="serach-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>

                        <div className="prod-details">
                            <span className="name-product">product name</span>
                            <span className="name-desc">product desc</span>
                        </div>
                    </div>
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>

                        <div className="prod-details">
                            <span className="name-product">product name</span>
                            <span className="name-desc">product desc</span>
                        </div>
                    </div>
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>

                        <div className="prod-details">
                            <span className="name-product">product name</span>
                            <span className="name-desc">product desc</span>
                        </div>
                    </div>
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>

                        <div className="prod-details">
                            <span className="name-product">product name</span>
                            <span className="name-desc">product desc</span>
                        </div>
                    </div>
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>

                        <div className="prod-details">
                            <span className="name-product">product name</span>
                            <span className="name-desc">product desc</span>
                        </div>
                    </div>
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>

                        <div className="prod-details">
                            <span className="name-product">product name</span>
                            <span className="name-desc">product desc</span>
                        </div>
                    </div>
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>

                        <div className="prod-details">
                            <span className="name-product">product name</span>
                            <span className="name-desc">product desc</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
