import { useParams } from 'react-router-dom';
import Products from '../Products/Products';
import useFetch from '../../hooks/useFetch';

import './Category.scss';
const Category = () => {
    const { id } = useParams(); // prop '{id}' là phải khớp với cái router ("<Route path="/product/:id" element={<SingleProduct />} />") ở file App.js
    const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    Category:
                    <p style={{ color: 'red' }}>
                        {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
                    </p>
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category;
