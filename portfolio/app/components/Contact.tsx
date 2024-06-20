import { useState } from "react";
import { toast } from "sonner";
import { FormData } from "@/types/formData";

export default function Contact() {
  const [formdata, setFormdata] = useState<FormData>({
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

  const sendMailToHost = async (formdata: FormData) => {
    try {
      const response = await fetch("/api/email/host", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("An error occurred while sending mail to host:", error);
      throw error;
    }
  };

  const sendMailToUser = async (formdata: FormData) => {
    try {
      const response = await fetch("/api/email/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("An error occurred while sending mail to user:", error);
      throw error;
    }
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const hostResponse = await sendMailToHost(formdata);
      const userResponse = await sendMailToUser(formdata);
      if (hostResponse.success && userResponse.success) {
        toast.success(`Message sent. Thank you ${formdata.user_name}!`);
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
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
                onClick={handleSubmit}
                className="w-full mb-8 p-2 rounded-md bg-primary-400 hover:bg-primary-300 text-primary-100"
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
