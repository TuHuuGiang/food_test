import { Link } from 'react-router-dom';
import './style.css';
import foodTest from '../../assets/img/product/food-1.png';

export default function ProdDetail() {
    return (
        <>
            <div className="product">
                <div className="product-container">
                    <div className="product__img">
                        <img src={foodTest} alt="" className="img-detail" />
                    </div>
                    <div className="product__info">
                        <h1 className="product__info-name">Burger Mozzarella</h1>
                        <h2 className="product__info-price">59.000 VNĐ</h2>
                        <input type="number" className="product__info-quantity" min={1} max={10} />
                        <Link to="" className="buy">Thêm vào giỏ hàng</Link>
                    </div>
                </div>
            </div>
            <div className="product-related">
                <h1>Sản phẩm liên quan</h1>
                <div className="product-content">
                    <div className="product__item">
                        <div className="product__item-image">
                            <img src={foodTest} alt="" />
                        </div>
                        <div className="product__item-content">
                            <h3>Burger</h3>
                            <h2 className="product-price">
                                59.000 VNĐ
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
                                59.000 VNĐ
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
                                59.000 VNĐ
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
                                59.000 VNĐ
                            </h2>
                            <Link to="/product-detail" className="buy">Thêm vào giỏ hàng</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}