import React from 'react'
import "./HomeBanner.scss"
const HomeBanner:React.FC = () => {
  return (
    <>
    <div className='home_banner'>
    <div className="bg_layout"></div>
    <div className="banner_content">
        <div className="left_content">
            <div className="title">
                Celebrate Love at<br/> GourmentGrove
            </div>
            <div className="text">
                Treat your special someone<br/> to our exclusive Valentine's<br/> menu
            </div>
        </div>
        <div className="right_content">
            <div className="cart_button">Go to Cart</div>
        </div>
    </div>
    </div>
    </>
  )
}

export default HomeBanner
