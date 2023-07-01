import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./ReadyToWork.css";
import "@fontsource/roboto";
import "@fontsource/roboto/400.css";
import { FaFacebookMessenger, FaSkype } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";

const ReadyToWork = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);




  return (
    <div  className="pb-20">
      <Zoom>
      <div className="card w-10/12 mx-auto rounded-none bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h2 className="ready text-2xl font-bold pt-3">
              I am ready to work with you
            </h2>
            <div className="flex flex-row space-x-4">
              <FaFacebookMessenger />
              <FaSkype></FaSkype>
            </div>
          </div>
          <hr />
          <form>
            <div className="grid md:grid-cols-4  grid-cols-1 gap-4 pb-6 pt-3">
              <div className="form-control work">
                <input
                  type="text"
                  placeholder="Name*"
                  className="input input-bordered rounded-sm h-10"
                />
              </div>
              <div className="form-control work">
                <input
                  type="email"
                  placeholder="Email*"
                  className="input input-bordered rounded-sm h-10"
                />
              </div>
              <div className="form-control work">
                <select
                  {...register("gender")}
                  className="ready input input-bordered rounded-sm h-10"
                >
                  <option value="eCommerce solutions">
                    eCommerce solutions
                  </option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Websites ">Websites</option>
                </select>
              </div>
              <input
                type="submit"
                value="Send a request"
                className="btn btn-sm rounded-sm text-white bg-rose-500 hover:bg-rose-500 h-10"
              />
            </div>
          </form>
          <p className="font-bold ready">
            i
            <span className="ml-3 text-gray-400">
              I'm available working for 15 hours . You will message me at
              anytime. I will back to you as soon as possible
            </span>
          </p>
        </div>
      </div>
      </Zoom>
    </div>
  );
};

export default ReadyToWork;
