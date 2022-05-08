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
                        src="https://img.freepik.com/free-vector/3d-audio-soundwave-colorful-music-pulse-oscillation-glowing-impulse-pattern_1217-4877.jpg?t=st=1651982018~exp=1651982618~hmac=fa191c2f179155741cb65590846681518799f104da8fbf08c3c5d594c2ec04f4&w=1480"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/3d-audio-soundwave-colorful-music-pulse-oscillation-glowing-impulse-pattern_1217-4877.jpg?t=st=1651982018~exp=1651982618~hmac=fa191c2f179155741cb65590846681518799f104da8fbf08c3c5d594c2ec04f4&w=1480"
            alt="Second slide"
            />

            <Carousel.Caption>
           
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/3d-audio-soundwave-colorful-music-pulse-oscillation-glowing-impulse-pattern_1217-4877.jpg?t=st=1651982018~exp=1651982618~hmac=fa191c2f179155741cb65590846681518799f104da8fbf08c3c5d594c2ec04f4&w=1480"
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