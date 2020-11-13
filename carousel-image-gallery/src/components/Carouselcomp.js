import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselComp() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
        <div className='carousel-container'>
            <h1 style={{ marginTop: '35px', }}>Trippa<span>Shots</span></h1>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={1200} style={{'height':"500px"}}>
                    <img
                        className="d-block w-100"
                        src="https://www.moneyweb.co.za/wp-content/uploads/2014/07/Zuma_rock-Large.jpg"
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Zuma Rock</h3>
                        <p>Niger State, Nigeria.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000} style={{'height':"500px"}}>
                    <img
                        className="d-block w-100"
                        src="https://www.nairaland.com/attachments/6575176_awhumwaterfallandcavelatestnewsheadlinenigeriarendezvous_jpegf671546b6597d53830cc2ef10ce26fb4"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Awhum Waterfall</h3>
                        <p>Enugu State, Nigeria.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{'height':"500px"}}>
                    <img
                        className="d-block w-100"
                        src="https://hotels.ng/guides/wp-content/uploads/2017/04/Osun-sacred-grove.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Osun Sacred Grove</h3>
                        <p>Osun State, Nigeria.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={600} style={{'height':"500px"}}>
                    <img
                        className="d-block w-100"
                        src="https://hotels.ng/guides/wp-content/uploads/2017/07/la-campagne-tropicana-Lekki-hotels.ng_.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Beach</h3>
                        <p>Lagos State, Nigeria.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={400} style={{'height':"500px"}}>
                    <img
                        className="d-block w-100"
                        src="https://www.nairaland.com/attachments/2797769_320451928680a66161b9o_jpeg373586ab4c54b0b808867b58538e2127"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Feet Statue</h3>
                        <p>Cross River State, Nigeria.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={200} style={{'height':"500px"}}>
                    <img
                        className="d-block w-100"
                        src="https://alicemag.ng/wp-content/uploads/2019/10/zar.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Emir of Zazzau Palace</h3>
                        <p>Kaduna State, Nigeria.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100} style={{'height':"500px"}}>
                    <img
                        className="d-block w-100"
                        src="https://lp-cms-production.imgix.net/2019-06/29730837.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>National Theatre</h3>
                        <p>Lagos State, Nigeria.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}


export default CarouselComp
