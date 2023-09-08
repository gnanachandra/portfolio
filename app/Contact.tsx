"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <div className="my-10 w-fit mx-auto" id="contact">
      <div className="mx-auto">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-center">Contact Me</h2>
          <h2 className="mt-5">
            Whether you have questions or you would just like to say hello,
            contact me.
          </h2>
        </div>
        <div className="mt-10">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">
              <input type="text" placeholder="First name"  className="p-2 rounded-md w-full border border-gray-700"/>
              <input placeholder="Last name" type="text"  className="p-2 rounded-md w-full border border-gray-700"/>
            </div>
            <input placeholder="Email" type="email"  className="p-2 rounded-md border border-gray-700"/>
            <input placeholder="Contact" type="email"  className="p-2 rounded-md border border-gray-700"/>
            <textarea placeholder="Message" className="p-2 border border-gray-700 rounded-md resize-none " rows={4} />
            <Button className="w-fit  mx-auto">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
