import { Link } from 'react-router-dom';

import './Button.scss';

function Button({
    to, // to: nhận link nội bộ của 'react-router-dom'
    href, // href: nhận link bên ngoài
    primary, // nhận prop primary ở component Header
    children, // children: nhận 1 icon trước (sau) thẻ button
    leftIcon,
    rightIcon,
    onclick, // onclick: nhận event onclick
    ...passProps // lấy hết các props mà ta pass thêm vào (thêm props ("target="_blank": mở link ngoài ở tab mới) trong component Header")
}) {
    let Comp = 'button';
    const props = {
        // onclick,
        ...passProps,
    }; // props link nội bộ

    if (to) {
        props.to = to;
        Comp = Link; // nếu là link nội bộ thì dùng Link của Router DOM
    } else if (href) {
        props.href = href;
        Comp = 'a'; // Nếu là link ngoài thì sẽ là thẻ a và sec huyển hướng đến page của link đó
    }

    return (
        <Comp className="wrapper-btn" {...props}>
            {leftIcon && <span className="icon-button">{leftIcon}</span>}
            <span className="title-button">{children}</span>
            {rightIcon && <span className="icon-button">{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
