"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
interface contactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  contact: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit,reset, formState, clearErrors } =
    useForm<contactFormData>();
  let { errors,isSubmitSuccessful } = formState;
  const keys = Object.values(errors);
  if (keys.length > 0) {
    const message = keys[0].message;
    console.log(message);
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    clearErrors();
  }
  const send = async (data: contactFormData) => {
    const response = await axios.post("http://localhost:3000/api/send", data);
    return response.data;
  };
  const sendEmail: SubmitHandler<contactFormData> = async (data) => {
    toast.promise(send(data), {
      pending: "Sending Email !",
      success: {
        render({ data }) {
          return data.message;
        },
        
      },
      error: {
        render({data})
        {
          return JSON.stringify(data)
        }
      }
    });
    if(isSubmitSuccessful)
    {
      console.log("reset")
      reset()
    }
  };

  return (
    <div className="my-10 w-fit mx-auto" id="contact">
      <div className="mx-auto">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-center">
            Contact Me
          </h2>
          <h2 className="mt-5">
            Whether you have questions or you would just like to say hello,
            contact me.
          </h2>
        </div>
        <div className="mt-10">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(sendEmail)}
          >
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                placeholder="First name"
                className="p-2 rounded-md w-full border border-gray-700"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Firstname is required !",
                  },
                })}
              />
              <input
                placeholder="Last name"
                type="text"
                className="p-2 rounded-md w-full border border-gray-700"
                {...register("lastName", {})}
              />
            </div>
            <input
              placeholder="Email"
              type="email"
              className="p-2 rounded-md border border-gray-700"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required !",
                },
              })}
            />
            <input
              placeholder="Contact"
              type="text"
              className="p-2 rounded-md border border-gray-700"
              {...register("contact", {
                required: {
                  value: true,
                  message: "contact is required !",
                },
              })}
            />
            <textarea
              placeholder="Message"
              className="p-2 border border-gray-700 rounded-md resize-none "
              rows={4}
              {...register("message", {
                required: {
                  value: true,
                  message: "message is required !",
                },
              })}
            />
            <Button type="submit" className="w-fit  mx-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
