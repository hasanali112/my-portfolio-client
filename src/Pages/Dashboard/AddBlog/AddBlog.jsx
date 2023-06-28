import React from 'react';

const AddBlog = () => {
    return (
        <div>
           <div className="hero min-h-screen bg-gray-300">
        <div >
          <div className="text-center">
            <h1 className="text-5xl font-bold">Add Blog</h1>
          </div>
          <form>
            <div className="card-body w-full">
               <div className="grid grid-cols-2 gap-7">
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-80"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="Email"
                  placeholder="Eamil"
                  className="input input-bordered"
                />
              </div>
               </div>
               <div className="grid grid-cols-2 gap-7">
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Image 1</span>
                </label>
                <input
                  type="text"
                  placeholder="Project Image 1"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image 2</span>
                </label>
                <input
                  type="text"
                  placeholder="Project Image 2"
                  className="input input-bordered"
                />
              </div>
               </div>
               <div className="grid grid-cols-2 gap-7">
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Image 3</span>
                </label>
                <input
                  type="text"
                  placeholder="Project Image 3"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image 4</span>
                </label>
                <input
                  type="text"
                  placeholder="Project Image 4"
                  className="input input-bordered"
                />
              </div>
               </div>
               <div className="grid grid-cols-2 gap-7">
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
               </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
        </div>
    );
};

export default AddBlog;