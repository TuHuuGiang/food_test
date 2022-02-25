import { ref, child, get } from "firebase/database";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { database } from "../../utils/firebase_connect";
import './style.css';
import foodTest from '../../assets/img/product/food-1.png';
import firebase from 'firebase';

export default function HomePageProd() {
    let [prods, setProds] = useState([]);
    let [img,setImg] = userState('')
    let products = [];
    useEffect(() => {
        loadData();
    }, []);

    const storage = firebase.storage().ref()

    const loadData = () => {
        const dbRef = ref(database);
        get(child(dbRef, `products`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let data = snapshot.val();
                    let test = data.map(p => p.arrProd[0]);
                    setProds(test);
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <div className="product">
                <div className="heading">
                    <span>Món ăn phổ biến</span>
                    <h3>Các món ăn đặc biệt của chúng tôi</h3>
                </div>
                <div className="product__content">
                    {
                        prods.map((p, index) => (
                            <div className="product__item" key={index}>
                                <div className="product__item-image">
                                    <img src={p.imgProd} alt="" />
                                </div>
                                <div className="product__item-content">
                                    <h3>{p.nameProd}</h3>
                                    <h2 className="product-price">
                                        {p.priceProd}
                                    </h2>
                                    <Link to="/product-detail" className="buy">Thêm vào giỏ hàng</Link>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className="product__item">
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
                    </div> */}
                </div>
            </div>
        </>
    );
}