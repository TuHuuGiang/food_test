import { Link } from 'react-router-dom';
import './style.css';

export default function Nav() {
    return (
        <>
            <div className="header__nav">
                <ul>
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/product-category">Burger</Link></li>
                    <li><Link to="/product-category">Pizza</Link></li>
                    <li><Link to="/product-category">Thức uống</Link></li>
                    <li><a href="#contact">Liên hệ</a></li>
                </ul>
            </div>
        </>
    );
}