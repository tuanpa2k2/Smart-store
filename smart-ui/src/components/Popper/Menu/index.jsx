import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper'; // dat ten khac cho de nhan biet

import MenuItem from './MenuItem';
import './Menu.scss';

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive // cho phép ng dùng select vào được
            // visible // khi hover vao thi no se hien len
            delay={[0, 800]}
            placement="bottom-end"
            render={(attrs) => (
                <div className="menu-popper" tabIndex="-1" {...attrs}>
                    <PopperWrapper className="menu-popperWrapper">{renderItems()}</PopperWrapper>
                    {/* cho phép add thêm className="menu-popperWrapper" vì đã có nhận prop children "className" ở component "Wrapper" */}
                </div>
            )}
        >
            {/* vì nó là dấu menu của Header nên t dùng "children" để dễ thay đổi */}
            {children}
        </Tippy>
    );
}

export default Menu;
