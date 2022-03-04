import './index.css'
// import {BsArrowLeftSquare} from "react-icons/bs"
import { AiOutlineUser, AiFillHeart, AiOutlineHeart, AiOutlineStar, AiFillStar} from 'react-icons/ai'
// import { RiHomeLine} from 'react-icons/ri'
// import { BsPlusCircle, BsCart2} from 'react-icons/bs'
// import { BiTimeFive, BiDrink, BiSearch} from 'react-icons/bi'
// import { HiOutlineMenuAlt2} from 'react-icons/hi'
// import { FaRupeeSign, FaPizzaSlice} from 'react-icons/fa'
// import { GrIceCream} from 'react-icons/gr'
import Header from '../Header'

const Home = ()=>{

    return <>
    <Header/>
    <div className="home-container">
        <div className="home-responsive">
            <div className="home-banner">
            <div className="home-banner-details">
                <h1 className="home-banner-title">Super Fast Delivery<br/>Taste food anytime</h1>
                <p className="home-banner-description">Hi Foodie, Order your food now delivery with in 15 min's 
                Serving in Bangalore, Hyderabad, Delhi, Gurgaon, Nagpur, Jaipur, Chandigarh, Ahemdabad ...
                <br/>Always the love toward taste food continue...</p>
                <button className="order-now-btn">Order now</button>
            </div>
            <img
                src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645634340/swigyyy/assets/banner2_ajbqvx.png"
                alt="banner img"
                className="home-banner-img"
            />
        
            </div>

                <div className="delicious-container">
                    <div className="delicious-responsive">
                        <div className="delicious-container-left">
                            <h1 className="delicious-banner-title">
                                Yummy Recipies ...
                            </h1>
                            <h1 className="delicious-banner-sub-title">
                                Very delicious and tasty
                            </h1>
                            <p className="delicious-banner-description">
                                Made with fresh and healthy deliverables.
                            </p>
                            <img className="delicious-banner-img"
                                src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645711474/swigyyy/assets/delicious%20banner/fish_sojgus.png"
                                alt="delicious banner img"
                            />
                        </div>
                        <div className="delicious-container-right">
                            <div className="delicious-cards-container">
                
                                <div className="delicious-card">
                                    <img
                                    src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645710110/swigyyy/assets/delicious%20banner/chicken2_lprgel.png"
                                    alt="delicious card img"
                                    className="delicious-card-img"
                                    />
                                    <div className="delicious-card-content">
                                        <h1 className="delicious-card-title">Chicken</h1>
                                        <p className="delicious-card-description">Rosted chicken</p>
                                        <div className="delicious-card-footer">
                                            <p className="delicious-card-price">Rs 320</p>
                                            <AiFillHeart className="card-icon"/>
                                        </div>
                                    </div>
                                </div>
                
                                <div className="delicious-card">
                                    <img
                                    src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645710112/swigyyy/assets/delicious%20banner/pizza1_yuizxr.png"
                                    alt="delicious card img"
                                    className="delicious-card-img"
                                    />
                                    <div className="delicious-card-content">
                                        <h1 className="delicious-card-title">Domino's Pizza</h1>
                                        <p className="delicious-card-description">Buter Pizza</p>
                                        <div className="delicious-card-footer">
                                            <p className="delicious-card-price">Rs 300</p>
                                            <AiFillHeart className="card-icon"/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            <div className="delicious-cards-container">
                
                                <div className="delicious-card">
                                    <img
                                    src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645710111/swigyyy/assets/delicious%20banner/pizza2_hnznpq.png"
                                    alt="delicious card img"
                                    className="delicious-card-img"
                                    />
                                    <div className="delicious-card-content">
                                        <h1 className="delicious-card-title">Domino's Pizza</h1>
                                        <p className="delicious-card-description">Buter Pizza</p>
                                        <div className="delicious-card-footer">
                                            <p className="delicious-card-price">Rs 300</p>
                                            <AiFillHeart className="card-icon"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="delicious-card">
                                    <img
                                    src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645710248/swigyyy/assets/delicious%20banner/salad1_pon9v5.png"
                                    alt="delicious card img"
                                    className="delicious-card-img"
                                    />
                                    <div className="delicious-card-content">
                                        <h1 className="delicious-card-title">Vegetable Salad</h1>
                                        <p className="delicious-card-description">Fresh and Healthy</p>
                                        <div className="delicious-card-footer">
                                            <p className="delicious-card-price">Rs 180</p>
                                            <AiFillHeart className="card-icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            <h1 className="container-title">Popular Brands</h1>
            <div className="brands-container">
                    <div className="brands-responsive">

                <div className="brand-card">
                        <img src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645700048/swigyyy/assets/brands/kwality-walls-logo_f186jj.png"
                        alt="home brand logo"
                        className="brand-logo"
                        />
                </div>
                <div className="brand-card">
                    <img src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645702642/swigyyy/assets/brands/starbucks-logo_f75jlk.png"
                        alt="home brand logo"
                        className="brand-logo"
                        />
                </div>
                <div className="brand-card">
                        <img src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645699558/swigyyy/assets/brands/burger-king-logo_dd2tj4.png"
                        alt="brand logo"
                        className="brand-logo"
                        />
                </div>
                        <div className="brand-card">
                            <img src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645699557/swigyyy/assets/brands/pizza-hut-logo_tttt8h.png"
                                alt="brand logo"
                                className="brand-logo"
                            />
                        </div>
                <div className="brand-card">
                        <img src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645699558/swigyyy/assets/brands/kfc-logo_mnq6ki.png"
                        alt="brand logo"
                        className="brand-logo"
                        />
                </div>
                
                <div className="brand-card">
                        <img src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645699557/swigyyy/assets/brands/subway-logo_rk7xjs.png"
                        alt="brand logo"
                        className="brand-logo"
                        />
                </div>
                 
                <div className="brand-card">
                        <img src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645699557/swigyyy/assets/brands/mcdonalds-logo_if3izj.png"
                        alt="brand logo"
                        className="brand-logo"
                        />
                </div>
                <div className="brand-card">
                        <img src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645699557/swigyyy/assets/brands/domions-pizza-logo_yo7hdz.png"
                        alt="brand logo"
                        className="brand-logo"
                        />
                        </div>
                </div>
            </div>
    <h1 className="container-title">Popular Brands</h1>
    
        </div>
    </div>
    </>
}

export default  Home 