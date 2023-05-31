import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Tippy from '@tippyjs/react/headless';

import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { CiMenuKebab } from 'react-icons/ci';
import { MdLanguage } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';
import { BsKeyboard } from 'react-icons/bs';
import { FcKey } from 'react-icons/fc';

// import Button from '../Button/Button';

import Menu from '../Popper/Menu';
import Cart from '../Cart/Cart';
import Search from './Search/Search';
import './Header.scss';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const MENU_ITEMS = [
        {
            icon: <MdLanguage />,
            title: 'English',
        },
        {
            icon: <VscFeedback />,
            title: 'Feedback and help',
            to: '/feedback', // nhận link nội bộ của react
        },
        {
            icon: <BsKeyboard />,
            title: 'Keyboard shortcuts',
        },
        {
            icon: <FcKey />,
            title: 'Sign in',
            // href: 'https://facebook.com/tuanpa2002', // nhận link bên ngoài
            to: './login',
        },
    ];

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
                        <TbSearch onClick={() => setShowSearch(true)} />
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <CgShoppingCart />
                            <span>5</span>
                        </span>
                        {/* <Button
                            primary
                            rightIcon={<CgLogIn />}
                            // to="/login" // nhận link nội bộ của react-router-dom
                            // href="https://www.facebook.com/TuanPA.2002/" // prop href: nhận link ngoài
                            // target="_blank" // khi click nó sẽ chuyển hướng sang tab mới với cái link đó
                        >
                            Login
                        </Button> */}

                        <Menu items={MENU_ITEMS}>
                            <span className="more-btn">
                                {/* nhận children của component Menu */}
                                <CiMenuKebab />
                            </span>
                        </Menu>
                    </div>
                </div>
            </header>

            {/* truyền prop "setShowCart" trong component Cart để handle btn-close */}
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
};

export default Header;
