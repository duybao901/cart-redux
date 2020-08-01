import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className={`social col-xs-12 col-md-6 col-lg-3`}>
                            <span>SOCIAL MEDIA</span>
                            <ul className="social__list">
                                <li>
                                    <button  className={`social__btn social__btn--fb`}><i className="fab fa-facebook-f" /></button>
                                </li>
                                <li>
                                    <button  className={`social__btn social__btn--isg`}><i className="fab fa-instagram" /></button>
                                </li>
                                <li>
                                    <button  className={`social__btn social__btn--twt`}><i className="fab fa-twitter" /></button>
                                </li>
                            </ul>
                        </div>
                        <div className={`social col-xs-12 col-md-6 col-lg-3`}>
                            <span>delivery</span>
                            <ul>
                                <li>
                                    <button>Store Delivery</button>
                                </li>
                                <li>
                                    <button>Online Delivery</button>
                                </li>
                                <li>
                                    <button>Delivery Terms &#38; Conditions</button>
                                </li>
                                <li>
                                    <button>Tracking</button>
                                </li>
                            </ul>
                        </div>
                        <div className={`social col-xs-12 col-md-6 col-lg-3`}>
                            <span>need help?</span>
                            <ul>
                                <li>
                                    <button>FAQ</button>
                                </li>
                                <li>
                                    <button>Contact Us</button>
                                </li>
                                <li>
                                    <button>Product Registation</button>
                                </li>
                            </ul>
                        </div>
                        <div className={`social col-xs-12 col-md-6 col-lg-3`}>
                            <span>instragram photo</span>
                            <ul className="social__list">
                                <li>
                                    <img alt="footer img" src={require('../img/face1.jpg')}></img>
                                </li>
                                <li>
                                    <img alt="footer img" src={require('../img/face.jpg')}></img>
                                </li>
                                <li>
                                    <img alt="footer img" src={require('../img/face2.jpg')}></img>
                                </li>
                                <li>
                                    <img alt="footer img" src={require('../img/face3.jpg')}></img>
                                </li>
                                <li>
                                    <img alt="footer img" src={require('../img/face4.jpg')}></img>
                                </li>
                                <li>
                                    <img alt="footer img" src={require('../img/face5.jpg')}></img>
                                </li>
                                <li>
                                    <img alt="footer img" src={require('../img/face6.jpg')}></img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;
