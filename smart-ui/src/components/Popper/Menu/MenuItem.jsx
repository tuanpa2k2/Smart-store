import Button from '../../Button/Button';
import './Menu.scss';

function MenuItem({ data }) {
    return (
        <Button className="wrapper-menuItem" leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
