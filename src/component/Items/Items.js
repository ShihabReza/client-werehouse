import React from 'react';
import { Link } from 'react-router-dom';

const Items = (props) => {
    const {img,name,description,quntyty,supplierName,price,id} = props.item;

    const hendelButton = id =>{
        
    }

    return (
       
            <div className="col-xl-4 p-3 h">
               
                <img style={{ width:'400px',height:'300px'}} src={img} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>Quntyty : {quntyty}</h4>
                <p>supplierName : {supplierName}</p>
                <h5>${price}</h5>
                <Link to='/detls'><button onClick={()=>hendelButton(id)} className='w-100 border-0 bg-dark text-white p-3'>UPDETE</button></Link>
            </div>
       
    );
};

export default Items;