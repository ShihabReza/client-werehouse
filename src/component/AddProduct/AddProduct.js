import React from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit,} = useForm();
    
   const onSubmit = data =>{

    const url = `https://evening-fjord-90434.herokuapp.com/product`
    fetch(url,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(data),
    })
    .then(res => res.json())
    .then(result=>console.log(result))
   }
    return (
        <div className='w-50 mx-auto mt-5'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-3' placeholder='Name' {...register("Name", { required: true, maxLength: 20 })} />
            <textarea className='mb-3' placeholder='description' {...register("description", )} />
            <input className='mb-3' placeholder='price' type="number" {...register("price", )} />
            <input className='mb-3' placeholder='photo url' type="text" {...register("photo url", )} />
            <input className='mb-3' placeholder='quntyty' type="text" {...register("quntyty", )} />
            <input className='mb-3' placeholder='supplierName' type="text" {...register("supplierName", )} />
            <input className='w-30' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;