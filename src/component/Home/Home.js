import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Items from '../Items/Items';
import MainSection from '../MainSection/MainSection';

const Home = () => {
    const [items,setItems] = useState ([])
    useEffect( () =>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/portrait-tender-happy-cute-blond-girl-white-dress-close-eyes-smiling-pleased-as-listening-music-headphones-feeling-warmth-happiness-enjoying-favorite-track-hold-mobile-phone_1258-93881.jpg?t=st=1651986356~exp=1651986956~hmac=685966ca9a357dbbea0fe45c92dfe5ac2e7a7b845ecb83d536ff0793110af218&w=1380"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/portrait-tender-happy-cute-blond-girl-white-dress-close-eyes-smiling-pleased-as-listening-music-headphones-feeling-warmth-happiness-enjoying-favorite-track-hold-mobile-phone_1258-93881.jpg?t=st=1651986356~exp=1651986956~hmac=685966ca9a357dbbea0fe45c92dfe5ac2e7a7b845ecb83d536ff0793110af218&w=1380"
            alt="Second slide"
            />

            <Carousel.Caption>
           
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/portrait-tender-happy-cute-blond-girl-white-dress-close-eyes-smiling-pleased-as-listening-music-headphones-feeling-warmth-happiness-enjoying-favorite-track-hold-mobile-phone_1258-93881.jpg?t=st=1651986356~exp=1651986956~hmac=685966ca9a357dbbea0fe45c92dfe5ac2e7a7b845ecb83d536ff0793110af218&w=1380"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            <div className="container mt-5 gx-1">
                <div className="row ">
                    {
                      items.map(item=><Items key={item._id} item={item}></Items>)
                    }
                </div>
            </div>
            <MainSection></MainSection>
        </div>
    );
};

export default Home;