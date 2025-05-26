import { useState, useRef } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    setSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      formRef.current?.reset(); // clear input fields
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16 px-4 md:px-12 lg:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-emerald-300 drop-shadow-md">
        Contact Me
      </h2>

      {!submitted ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          action="https://formsubmit.co/sangluo2015@gmail.com"
          method="POST"
          className="max-w-2xl mx-auto grid gap-6"
        >
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:border-emerald-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:border-emerald-400"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:border-emerald-400"
          ></textarea>

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="text-center text-xl text-green-400 mt-8 animate-fade-in">
          ✅ Thank you! Your message has been sent. Returning to form...
        </div>
      )}
      <div className="flex justify-center gap-6 mt-10 text-2xl text-gray-400">
    <a
        href="https://github.com/Sang-Luo"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
    >
        <i className="fab fa-github"></i>
    </a>
    <a
        href="www.linkedin.com/in/sang-luong-484749353"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
    >
        <i className="fab fa-linkedin"></i>
    </a>
    <a
        href="mailto:sangluo@email.com"
        className="hover:text-white transition"
    >
        <i className="fas fa-envelope"></i>
    </a>
    </div>
    </section>
  );
}

export default Contact;
