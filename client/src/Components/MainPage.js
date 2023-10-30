import React from 'react'
import Navbar from "./Navbar";
import Footer from './Footer'
import w1 from '../Images/w1.png';
import w2 from '../Images/w2.png';
import w3 from '../Images/w3.png';

import "./MainPage.css"
function MainPage() {
  
  return (
    <div>
      <Navbar/>
      <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to the Game Store</h1>
        <p>Explore our latest games and top picks</p>
      </div>
    </div>

    <section class="product_section layout_padding">
    <div class="games_container">
      <div class="heading_container heading_center">
        <h2>
          Top selling games
        </h2>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <img src="images/p1.png" alt=""/>
              <a href="" class="add_cart_btn">
                <span>
                  Add To Cart
                </span>
              </a>
            </div>
            <div class="detail-box">
              <h5>
                Product Name
              </h5>
              <div class="product_info">
                <h5>
                  <span>$</span> 300
                </h5>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <img src="images/p2.png" alt=""/>
              <a href="" class="add_cart_btn">
                <span>
                  Add To Cart
                </span>
              </a>
            </div>
            <div class="detail-box">
              <h5>
                Product Name
              </h5>
              <div class="product_info">
                <h5>
                  <span>$</span> 300
                </h5>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <img src="images/p3.png" alt=""/>
              <a href="" class="add_cart_btn">
                <span>
                  Add To Cart
                </span>
              </a>
            </div>
            <div class="detail-box">
              <h5>
                Product Name
              </h5>
              <div class="product_info">
                <h5>
                  <span>$</span> 300
                </h5>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="heading_container heading_center">
        <h2>
          Latests games
        </h2>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <img src="images/p1.png" alt=""/>
              <a href="" class="add_cart_btn">
                <span>
                  Add To Cart
                </span>
              </a>
            </div>
            <div class="detail-box">
              <h5>
                Product Name
              </h5>
              <div class="product_info">
                <h5>
                  <span>$</span> 300
                </h5>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <img src="images/p2.png" alt=""/>
              <a href="" class="add_cart_btn">
                <span>
                  Add To Cart
                </span>
              </a>
            </div>
            <div class="detail-box">
              <h5>
                Product Name
              </h5>
              <div class="product_info">
                <h5>
                  <span>$</span> 300
                </h5>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <img src="images/p3.png" alt=""/>
              <a href="" class="add_cart_btn">
                <span>
                  Add To Cart
                </span>
              </a>
            </div>
            <div class="detail-box">
              <h5>
                Product Name
              </h5>
              <div class="product_info">
                <h5>
                  <span>$</span> 300
                </h5>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  </section>
  <section class="why_us_section layout_padding">
    <div class="why_us_container">
      <div class="heading_container heading_center">
        <h2>
          Why Choose Us
        </h2>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="box ">
            <div class="img-box">
              <img src={w1} alt=""/>
            </div>
            <div class="detail-box">
              <h5>
                Fast Delivery
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box ">
            <div class="img-box">
              <img src={w2} alt=""/>
            </div>
            <div class="detail-box">
              <h5>
                Free Shiping
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box ">
            <div class="img-box">
              <img src={w3} alt=""/>
            </div>
            <div class="detail-box">
              <h5>
                Best Quality
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      <Footer/>
    </div>
  )
}

export default MainPage
