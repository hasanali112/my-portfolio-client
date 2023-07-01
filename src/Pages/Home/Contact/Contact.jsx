import React, { useRef } from "react";
import { FaFacebook,  FaLinkedin, FaPinterest, FaSkype, FaSnapchat, FaTwitter } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { Zoom } from "react-awesome-reveal";

const Contact = () => {
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_thglkgn', 'template_5u60f7o', form.current, 'yl4_FVjs0VVznUBLY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className="mt-20 pb-10">
      <Zoom>
      <div className="card w-2/3 mx-auto rounded-sm bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="ready text-2xl font-bold pt-3">Contact Me</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid   grid-cols-1  pb-6 pt-3">
              <div className="form-control">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name*"
                  className="input input-bordered rounded-sm h-10"
                />
              </div>
            </div>
            <div className="grid  grid-cols-1  pb-6 ">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email*"
                  name="user_email"
                  className="input input-bordered rounded-sm h-10"
                />
              </div>
              
            </div>
            <div className="form-control">
            <textarea name="message" placeholder="Message*" className="textarea textarea-bordered textarea-md  rounded-none w-full" ></textarea>
              </div>
             <div className="flex flex-col mt-5 md:flex-row md:justify-between md:items-center">
             <input
                type="submit"
                value="Send"
                className="btn btn-sm px-10  rounded-sm text-white bg-rose-500 hover:bg-rose-500 h-10"
              />
              <div className="flex flex-row space-x-2 items-center md:mt-0 mt-3">
                <FaFacebook style={{color:'red'}} className="border w-14 h-10 p-2"></FaFacebook>
                <FaTwitter style={{color:'red'}} className="border w-14 h-10 p-2"></FaTwitter>
                <FaLinkedin style={{color:'red'}} className="border w-14 h-10 p-2"></FaLinkedin>
                <FaPinterest style={{color:'red'}} className="border w-14 h-10 p-2 lg:block hidden"></FaPinterest>
                <FaSkype style={{color:'red'}} className="border w-14 h-10 p-2 lg:block hidden"></FaSkype>
                <FaSnapchat style={{color:'red'}} className="border w-14 h-10 p-2 lg:block hidden"></FaSnapchat>
              </div>
             </div>
          </form>
        </div>
      </div>
      </Zoom>
    </div>
  );
};

export default Contact;
