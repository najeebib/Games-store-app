import React from 'react'
import Navbar from "./Navbar";
import Footer from './Footer'

import './AboutUs.css'
import gamesPng from '../Images/games.png'
function AboutUs({ isLoggedIn, userID,setIsLoggedIn ,setID }) {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} userID={userID} setIsLoggedIn={setIsLoggedIn} setID={setID}/>
      <section class="about_section">
        <div class="container-fluid ">
          <div class="row">
            <div class="col-md-5 ml-auto">
              <div class="detail-box pr-md-3">
                <div class="heading_container">
                  <h2>
                    We Provide Best For You
                  </h2>
                </div>
                <p>
                  Totam architecto rem beatae veniam, cum officiis adipisci soluta perspiciatis ipsa, expedita maiores quae accusantium. Animi veniam aperiam, necessitatibus mollitia ipsum id optio ipsa odio ab facilis sit labore officia!
                  Repellat expedita, deserunt eum soluta rem culpa. Aut, necessitatibus cumque. Voluptas consequuntur vitae aperiam animi sint earum, ex unde cupiditate, molestias dolore quos quas possimus eveniet facilis magnam? Vero, dicta.
                </p>
                
              </div>
            </div>
            <div class="col-md-6 px-0">
              <div class="img-box">
                <img src={gamesPng} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  )
}

export default AboutUs
