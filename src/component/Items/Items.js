import React from 'react';
import { Link, useNavigate,} from 'react-router-dom';

const Items = (props) => {
    const {img,name,description,quntyty,supplierName,price,_id} = props.item;
    const navigate = useNavigate()

    const hendelButton = id =>{
    
        navigate(`/detls/${id}`)
        
    }

    return (
       
            <div className="col-xl-4 p-3 h">
               
                <img style={{ width:'400px',height:'300px'}} src={img} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>Quntyty : {quntyty}</h4>
                <p>supplierName : {supplierName}</p>
                <h5>${price}</h5>
                <button onClick={()=>hendelButton(_id)} className='w-100 border-0 bg-dark text-white p-3'>UPDETE</button>
            </div>
       
    );
};

export default Items;