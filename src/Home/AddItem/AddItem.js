import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
  console.log(data);
  const url='http://localhost:5000/service';
  fetch(url, {
      method : 'POST',
      headers : {
         'content-type': 'application/json'
      },
      body : JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(result=>{
      console.log(result)
  })
  }
    return (
        <div>
           <h1>Please Add A Item</h1> 
           <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='name' {...register("name")} />
      <input placeholder='description' {...register("description")} />
      <input placeholder='price' type="number" {...register("price")} />
      <input placeholder='photo url' type="text" {...register("photo")} />
      <br/>
      <input type="submit" value="Add Item" />
    </form>
        </div>
    );
};

export default AddItem;