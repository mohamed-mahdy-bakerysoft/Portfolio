import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formdata, setFormdata] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formdata.user_name) {
      toast.error("Name is required");
      return false;
    }
    if (!formdata.user_email) {
      toast.error("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formdata.user_email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!formdata.message) {
      toast.error("Message is required");
      return false;
    }
    return true;
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    toast.success(
      `thank you ${formdata.user_name} for your message, I will get back to you at ${formdata.user_email}`
    );
    emailjs.send(
      process.env.NEXT_PUBLIC_MAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_MAILJS_TEMPLATE_ID as string,
      formdata,
      process.env.NEXT_PUBLIC_MAILJS_PUBLIC_KEY
    );
  };
  return (
    <section className="contact py-20 bg-white text-primary" id="contact">
      <div className="w-[70%] md:w-[80%] mx-auto">
        <h2 className="text-4xl font-bold text-center">Contact</h2>
        <div className="justify-center items-center bg-primary-700 text-primary rounded-lg shadow-lg">
          <form className="w-[80%] md:w-[90%] mx-auto max-w-[500px]">
            <div className="flex flex-row my-4 items-center justify-center">
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Name"
                className="w-full mt-8 p-2 rounded-md"
                value={formdata.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row my-4 items-center justify-center">
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Email"
                className="w-full mt-4 p-2 rounded-md"
                value={formdata.user_email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row my-4 items-center justify-center">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="w-full my-4 p-2 rounded-md h-[180px]"
                value={formdata.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row my-4 items-center justify-center">
              <button
                onClick={handleClick}
                className="w-full mb-8 p-2 rounded-md bg-primary-400 text-primary-100"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
