import {React,useEffect, useState} from 'react'
import Navbar from "./Navbar";
import Footer from './Footer'
import w1 from '../Images/w1.png';
import w2 from '../Images/w2.png';
import w3 from '../Images/w3.png';

import "./MainPage.css"
function MainPage() {
  const [latest_games,setLatest] = useState([]);
  const [top_games,setTop] = useState([]);
  useEffect(() => {//fetch games from server to display
    const fetchTopGames  = async ()=>{
      try{
        const response = await fetch("http://15.160.211.183/games/top");
        const top = await response.json();
        setTop(top);
        console.log(top);
      }
      catch(err)
      {
        console.log(err);
      }
    };
    const fetchLatestGames  = async ()=>{
      try{
        const response = await fetch("http://15.160.211.183/games/latest");
        const latest = await response.json();
        setLatest(latest);
        console.log(latest);
      }
      catch(err)
      {
        console.log(err);
      }
    };
    fetchTopGames();
    fetchLatestGames();
    
  }, []);

  
  return (
    <div>
      <Navbar />
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
        {latest_games.map((game) =>(
            <div class="col-sm-6 col-lg-4">
            <div class="box">
              <div class="img-box">
                <img src={`http://15.160.211.183/Images/${game.ImageName}`} alt="" style={{ width: '400px', height: '300px' }}/>
                
              </div>
              <div class="detail-box text-center">
                <h5>
                  {game.Name}
                </h5>
                <h5>
                    <span>$</span>{game.Price}
                  </h5>
                
              </div>
            </div>
          </div>
        ))}
        
        
        
        
      </div>
      <div class="heading_container heading_center">
        <h2>
          Latests games
        </h2>
      </div>
      <div class="row">
      {top_games.map((game) =>(
            <div class="col-sm-6 col-lg-4">
            <div class="box">
              <div class="img-box">
                <img src={`http://15.160.211.183/Images/${game.ImageName}`} alt="" style={{ width: '400px', height: '300px' }}/>
                
              </div>
              <div class="detail-box text-center">
                <h5>
                  {game.Name}
                </h5>
                <h5>
                    <span>$</span>{game.Price}
                  </h5>
                
              </div>
            </div>
          </div>
        ))}
        
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
