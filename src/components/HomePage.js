import React from 'react'
import './HomePage.css'

function HomePage() {
    return (
        <div>
            <div className="background"> 
                <img className="background_image" src="https://www.spacex.com/static/images/backgrounds-2021/HP_SN11_Vertical_20210311_IMG_01221.webp" alt="" />
            </div>
           <div className="inner-right-bottom">
          <h4 className="animate">
        FLIGHT TEST
          </h4>
          <h1 className="animate_shadowed "> 
            STARSHIP SN11 HIGH-ALTITUDE FLIGHT TEST
          </h1>
          <a href="/vehicles" className="btn_animate">

          </a>
           </div>
        </div>
    )
}

export default HomePage;