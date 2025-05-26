import { Typewriter } from 'react-simple-typewriter';


function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 text-white animated-bg">
      <img
        src="/profile.jpg"
        alt="Sang"
        className="w-32 h-32 rounded-full mb-6 border-4 border-blue-500 shadow-lg"
        />

      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Sang 👋</h1>

      <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
        <Typewriter
          words={['Aspiring Data Analyst', 'Web Developer', 'Tech Explorer']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      <p className="max-w-xl text-lg mb-8">
        I recently graduated with a Computer Science degree and love creating clean, functional websites and analyzing data. Let's build something amazing!
      </p>
     
      <a
        href="/Resume.pdf"
        download
        className="mt-4 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm md:text-base transition"
      >
        Download Resume
      </a>

      <a
        href="#projects"
        className="mt-4 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm md:text-base transition"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;
