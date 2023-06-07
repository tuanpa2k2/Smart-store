import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

import useFetch from '../../../hooks/useFetch';

import './Search.scss';

const Search = ({ setShowSearch }) => {
    const [searchRerult, setSearchRerult] = useState('');
    const navigate = useNavigate();

    const onChangeInput = (e) => {
        setSearchRerult(e.target.value);
    };

    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${searchRerult}`);
    if (!searchRerult.length) {
        data = null;
    }

    return (
        <div className="search-model">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder="Search for product..."
                    value={searchRerult}
                    onChange={onChangeInput}
                />
                <MdClose onClick={() => setShowSearch(false)} />
            </div>

            <div className="search-result-content">
                <div className="serach-results">
                    {data?.data?.map((item) => (
                        <div
                            key={item.id}
                            className="search-result-item"
                            onClick={() => {
                                navigate(`/product/` + item.id);
                                setShowSearch(false);
                            }}
                        >
                            <div className="img-container">
                                <img
                                    src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url}
                                    alt=""
                                />
                            </div>

                            <div className="prod-details">
                                <span className="name-product">{item.attributes.title}</span>
                                <span className="name-desc">{item.attributes.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
