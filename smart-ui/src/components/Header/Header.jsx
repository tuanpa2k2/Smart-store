import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart, CgLogIn } from 'react-icons/cg';
import { CiMenuKebab } from 'react-icons/ci';

import Button from '../Button/Button';

import './Header.scss';
const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        } else setScrolled(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                {/* scroll quá 100 thì add thêm class "sticky-header" ngược lại thì ko */}
                <div className="header-contend">
                    <ul className="left">
                        <li>
                            <Link to="/" style={{ color: 'white' }}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/category" style={{ color: 'white' }}>
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link to="/product" style={{ color: 'white' }}>
                                Product
                            </Link>
                        </li>
                    </ul>
                    <div className="center">
                        <p>S</p>
                        <p>M</p>
                        <p>A</p>
                        <p>R</p>
                        <p>T</p>
                        <p>-</p>
                        <p>S</p>
                        <p>T</p>
                        <p>O</p>
                        <p>R</p>
                        <p>E</p>
                    </div>
                    <div className="right">
                        <TbSearch />
                        {/* <span className="cart-icon">
                            <CgShoppingCart />
                            <span>5</span>
                        </span> */}
                        <Button
                            primary
                            rightIcon={<CgLogIn />}
                            // to="/login" // nhận link nội bộ của react-router-dom
                            // href="https://www.facebook.com/TuanPA.2002/" // prop href: nhận link ngoài
                            // target="_blank" // khi click nó sẽ chuyển hướng sang tab mới với cái link đó
                        >
                            Login
                        </Button>
                        <CiMenuKebab style={{ marginLeft: -20 }} />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
