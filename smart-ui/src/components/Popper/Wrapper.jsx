import './Popper.scss';

function Wrapper({ children, className }) {
    return <div className={`wrapper-popper ${className}`}>{children}</div>;
}

export default Wrapper;
