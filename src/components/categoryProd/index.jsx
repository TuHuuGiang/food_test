import { Link } from 'react-router-dom';
import './style.css';
import foodTest from '../../assets/img/product/food-1.png';

export default function CategoryProd() {
    return (
        <>
            <div className="product">
                <div className="product__content">
                    <div className="product__item">
                        <div className="product__item-image">
                            <img src={foodTest} alt="" />
                        </div>
                        <div className="product__item-content">
                            <h3>Burger</h3>
                            <h2 className="product-price">
                                60.000 VNĐ
                            </h2>
                            <Link to="/product-detail" className="buy">Thêm vào giỏ hàng</Link>
                        </div>
                    </div>
                    <div className="product__item">
                        <div className="product__item-image">
                            <img src={foodTest} alt="" />
                        </div>
                        <div className="product__item-content">
                            <h3>Burger</h3>
                            <h2 className="product-price">
                                60.000 VNĐ
                            </h2>
                            <Link to="/product-detail" className="buy">Thêm vào giỏ hàng</Link>
                        </div>
                    </div>
                    <div className="product__item">
                        <div className="product__item-image">
                            <img src={foodTest} alt="" />
                        </div>
                        <div className="product__item-content">
                            <h3>Burger</h3>
                            <h2 className="product-price">
                                60.000 VNĐ
                            </h2>
                            <Link to="/product-detail" className="buy">Thêm vào giỏ hàng</Link>
                        </div>
                    </div>
                    <div className="product__item">
                        <div className="product__item-image">
                            <img src={foodTest} alt="" />
                        </div>
                        <div className="product__item-content">
                            <h3>Burger</h3>
                            <h2 className="product-price">
                                60.000 VNĐ
                            </h2>
                            <Link to="/product-detail" className="buy">Thêm vào giỏ hàng</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}