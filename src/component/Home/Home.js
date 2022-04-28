import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Items from '../Items/Items';

const Home = () => {
    const [items,setItems] = useState ([])
    useEffect( () =>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-vector/realistic-hall-furniture_52683-69523.jpg?t=st=1651167414~exp=1651168014~hmac=dd9d0e4920c369042f66b6534df9770022ef6a97419c0baeccc0d1e329d04634&w=1380"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/realistic-hall-furniture_52683-69523.jpg?t=st=1651167414~exp=1651168014~hmac=dd9d0e4920c369042f66b6534df9770022ef6a97419c0baeccc0d1e329d04634&w=1380"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/realistic-hall-furniture_52683-69523.jpg?t=st=1651167414~exp=1651168014~hmac=dd9d0e4920c369042f66b6534df9770022ef6a97419c0baeccc0d1e329d04634&w=1380"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            <div className="container mt-5">
                <div className="row ">
                    {
                      items.map(item=><Items key={item.id} item={item}></Items>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;