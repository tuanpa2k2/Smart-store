import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Error from './components/Error/Error';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import AppContext from './utils/context';
import Login from './components/Authen/Login';
import Register from './components/Authen/Register';
import ForgotPassword from './components/Authen/ForgotPassword';

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/product" element={<SingleProduct />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/:somestring" element={<Error />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
