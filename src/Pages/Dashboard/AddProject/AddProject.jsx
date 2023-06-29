import React from "react";
import { useForm } from "react-hook-form";


const AddProject = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    const projectData = {
      image1: data.photo1,
      image2:data.photo2,
      status:data.status,
      tech1:data.tech1,
      tech2:data.tech2,
      tech3:data.tech3,
      tech4: data.tech4,
      liveSite: data.link,
      description: data.description
    }
    fetch('http://localhost:5000/projects',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(projectData)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data)
      reset();
    })
  };


  return (
    <div>
      <div className="hero min-h-screen bg-gray-300">
        <div >
          <div className="text-center">
            <h1 className="text-5xl font-bold">Add Project</h1>
          </div>
          <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body w-[700px]">
               <div className="grid grid-cols-2 gap-3">
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Website Main Image</span>
                </label>
                <input
                  type="text"
                  {...register("photo1", { required: true })}
                  placeholder="Website Main Image"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Website Full Image</span>
                </label>
                <input
                  type="text"
                  {...register("photo2", { required: true })}
                  placeholder="Website Full Image"
                  className="input input-bordered"
                />
              </div>
               </div>
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <input
                  type="text"
                  {...register("status", { required: true })}
                  placeholder="Update your work status"
                  className="input input-bordered"
                />
              </div>
               <div className="grid grid-cols-2 gap-4">
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Technology</span>
                </label>
                <input
                  type="text"
                  {...register("tech1", { required: true })}
                  placeholder="Name of Techonology"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">2</span>
                </label>
                <input
                  type="text"
                  {...register("tech2", { required: true })}
                  placeholder="Name of Techonology"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">3</span>
                </label>
                <input
                  type="text"
                  {...register("tech3", { required: true })}
                  placeholder="Name of Techonology"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">4</span>
                </label>
                <input
                  type="text"
                  {...register("tech4", { required: true })}
                  placeholder="Name of Techonology"
                  className="input input-bordered"
                />
              </div>
               </div>
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Live Site Link</span>
                </label>
                <input
                  type="text"
                  {...register("link", { required: true })}
                  placeholder="Live site link"
                  className="input input-bordered"
                />
              </div>
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  {...register("description", { required: true })}
                  placeholder="Description"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit"  value='Submit'/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
