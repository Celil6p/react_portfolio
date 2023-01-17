import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'service_05frzh8', 'template_z7pqtsc', form.current, 'M2I83dwk1MzK1h0U6'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email sent Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className=" text-black" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-black" data-aos="fade-down">
          {Contact.title}
        </h2>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border text-white placeholder:text-slate-400 bg-primaryLinear border-slate-400 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Your Email"
              required
              className="border text-white placeholder:text-slate-400 bg-primaryLinear border-slate-400 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border text-white placeholder:text-slate-400 bg-primaryLinear border-slate-400 p-3 rounded h-44"
              required
            ></textarea>
            <button
              className="btn self-start bg-bg_light_primary text-dark_primary hover:text-bg_light_primary hover:bg-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-black">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
