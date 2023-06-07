import { useNavigate } from 'react-router-dom';
import './Category.scss';

const Category = ({ categories }) => {
    const navigate = useNavigate();

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="shop-by-category">
            <span className="title-cate">all categories</span>
            <div className="categories" onClick={scrollUp}>
                {categories?.data?.map((item) => (
                    <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
