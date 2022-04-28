import React from 'react';

const Items = (props) => {
    const {img,name,description,quntyty,supplierName} = props.item;

    return (
       
            <div className="col-xl-4 p-3 ">
               
                <img style={{ width:'400px'}} src={img} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>Quntyty : {quntyty}</h4>
                <p>supplierName : {supplierName}</p>
            </div>
       
    );
};

export default Items;