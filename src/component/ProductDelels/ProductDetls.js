import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetls = () => {
    
    
    const {id} = useParams ()
    
    const [product,setProduct] = useState ({})
    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
        
        console.log(id)
    },[])
    return (
        <div className='d-flex mt-5'>
            <div className="w-50">
                <img style={{width: '800px'}} src={product.img} alt="" />
            </div>
            <div className="w-50 mt-5">
            <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>Quntyty : {product.quntyty}</h4>
                <p>supplierName : {product.supplierName}</p>
                <h5>${product.price}</h5>
            </div>
            
            
            
        </div>
        
    );
    
};

export default ProductDetls;