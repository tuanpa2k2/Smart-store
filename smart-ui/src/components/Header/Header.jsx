import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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

import { Context } from '../../utils/context';
import Menu from '../Popper/Menu';
import Cart from '../Cart/Cart';
import Search from './Search/Search';
import './Header.scss';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { cartCount } = useContext(Context);
    const navigate = useNavigate();

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
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
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
                            <Link onClick={scrollUp} to="/" style={{ color: 'white' }}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" style={{ color: 'white' }}>
                                about
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={{ color: 'white' }}>
                                contact
                            </Link>
                        </li>
                    </ul>
                    <div className="center" onClick={() => navigate('/')}>
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
                            {!!cartCount && <span>{cartCount}</span>}
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
