// Contact.jsx
function Contact() {
    return (
      <section
        id="contact"
        className="bg-gray-900 text-white py-16 px-4 md:px-12 lg:px-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-emerald-300 drop-shadow-md">
          Contact Me
        </h2>
  
        <form
          className="max-w-2xl mx-auto grid gap-6"
          action="https://formsubmit.co/sangluo2015@gmail.com"
          method="POST"
        >
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
      </section>
    );
  }
  
  export default Contact;
  