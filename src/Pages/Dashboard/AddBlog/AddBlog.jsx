import React from 'react';
import { useForm } from "react-hook-form";

const AddBlog = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    const blogUser = {
      title : data.title,
      status: data.status,
      image: data.photo,
      detail: data.description
    }
    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(blogUser)
    })
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      reset();
    })
  };


    return (
        <div>
           <div className="hero min-h-screen bg-gray-300">
        <div >
          <div className="text-center">
            <h1 className="text-5xl font-bold">Add Blog</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body w-full">
               <div className="grid grid-cols-2 gap-7">
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  {...register("title")}
                  placeholder="Title"
                  className="input input-bordered w-80"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <input
                  type="text"
                  {...register("status")}
                  placeholder="Status"
                  className="input input-bordered"
                />
              </div>
               </div>
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  {...register("photo")}
                  placeholder="Photo Url"
                  className="input input-bordered"
                />
              </div>
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  {...register("description")}
                  placeholder="Description"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input type="submit" value='Add' className="btn btn-primary"/>
              </div>
            </div>
          </form>
        </div>
      </div>
        </div>
    );
};

export default AddBlog;