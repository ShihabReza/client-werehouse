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
                        src="https://img.freepik.com/free-photo/portrait-tender-beautiful-blond-caucasian-girl-white-dress-daydreaming-while-listening-favorit_1258-93610.jpg?t=st=1651985960~exp=1651986560~hmac=6541515250311e596a676ba24df7119fa882128f5ff8746eadd4003cd241f257&w=1380"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/portrait-tender-beautiful-blond-caucasian-girl-white-dress-daydreaming-while-listening-favorit_1258-93610.jpg?t=st=1651985960~exp=1651986560~hmac=6541515250311e596a676ba24df7119fa882128f5ff8746eadd4003cd241f257&w=1380"
            alt="Second slide"
            />

            <Carousel.Caption>
           
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/portrait-tender-beautiful-blond-caucasian-girl-white-dress-daydreaming-while-listening-favorit_1258-93610.jpg?t=st=1651985960~exp=1651986560~hmac=6541515250311e596a676ba24df7119fa882128f5ff8746eadd4003cd241f257&w=1380"
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