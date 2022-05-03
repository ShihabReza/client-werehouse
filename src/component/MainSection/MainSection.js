import React from 'react';

const MainSection = () => {
    return (
        <div style={{height: '500px',border: '1px solid red', backgroundColor: '#58259a '}}>
            <div className="all-product w-50 mx-auto">
                <div style={{display: "inline"}}>
                    <img style={{width:'500px',height:'500px',}} src="https://img.freepik.com/free-photo/professional-camera-close-up-photographer-s-desktop-blurred-background_169016-10677.jpg?t=st=1651391574~exp=1651392174~hmac=f72db18b4713fc0ed1619072c27457c63c78d1032507d80a5ae91028ee3c8c58&w=1380" alt="" />
                </div>
                <div style={{display: "inline"}} className="">
                    <h1>Minolta 20 Mega Pixels
Wifi Digital Camera</h1>
                </div>
            </div>
        </div>
    );
};

export default MainSection;