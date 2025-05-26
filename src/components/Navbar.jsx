function Navbar() {
    return (
      <nav className="w-full fixed top-0 left-0 z-50 border-b border-white/10 backdrop-blur-md bg-white/5 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-tight text-white drop-shadow-md">
            Sang's Portfolio
            </h1>
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            {['home', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="relative text-white/70 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  