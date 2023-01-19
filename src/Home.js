import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className = "home">
        <div className = "home_container">
            <img className = "home_image"
            src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB8428684220_.jpg" 
            alt = ""/>
        </div>

        <div className = "home_row">
            <Product title = "Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)" 
                      price = {139.97}
                      rating = {5}
                      image = "https://images-na.ssl-images-amazon.com/images/I/71rXSVqET9L.__AC_SY300_SX300_QL70_FMwebp_.jpg"/>
            <Product title = "CeraVe AM Facial Moisturizing Lotion SPF 30 | Oil-Free Face Moisturizer with Sunscreen | Non-Comedogenic | 3 Ounce" 
                      price = {12.49}
                      rating = {4}
                      image = "https://m.media-amazon.com/images/I/81VWbVjvJqL._SL1500_.jpg"/>

        </div>

        <div className = "home_row">
        <Product title = "Massage Gun, Muscle Therapy Gun for Athletes, Deep Tissue Percussion Body Muscle Massager with 30 Adjustable Speeds, 10 Types of Massage Heads, Handheld Massager for Neck Back Pain Relief" 
                      price = {39.99}
                      rating = {5}
                      image = "https://m.media-amazon.com/images/I/71l4BLMaH7S._AC_SL1500_.jpg"/>

        <Product title = "iPlay, iLearn 10pcs Baby Rattles Toys Set, Infant Grab N Shake Rattle, Sensory Teether, Early Development Learning Music Toy, Newborn Birthday Gifts for 0 1 2 3 4 5 6 7 8 9 10 12 Month Babies Boy Girl" 
                      price = {27.99}
                      rating = {5}
                      image = "https://m.media-amazon.com/images/I/8161Wp4qq9L._AC_SL1500_.jpg"/>
        
        <Product title = "Resistance Bands Set 13 pcs, 6 Tube Stackable Up to 210 lbs Adjustable, Exercise Bands Fitness Workout with Wide Handles, Door Anchor, Steel Clasp, Carry Bag, Ankle Straps for Home Gym Outdoor Travel" 
                      price = {29.98}
                      rating = {5}
                      image = "https://m.media-amazon.com/images/I/81bo8hg3J4L._AC_SL1500_.jpg"/>
        
        </div>

        <div className = "home_row">
        <Product title = "Lifestyle Solutions HRFKS3BK Grayson Sofa, 78.7' W x 31.5' D x 32.7' H, Black"
                      rating = {5}
                      image = "https://m.media-amazon.com/images/I/81DKtPr6WhL._AC_SL1500_.jpg"/>
        
        <Product title = "Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6' FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard" 
                      price = {788.04}
                      rating = {5}
                      image = "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SL1500_.jpg"/>
        
        </div>



    </div>
  )
}

export default Home