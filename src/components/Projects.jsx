function Projects() {
    const projects = [
      {
        title: "Sales Performance Dashboard",
        description:
          "A data visualization dashboard using Python, Matplotlib, and Seaborn to analyze Superstore sales trends and product performance.",
        image: `${import.meta.env.BASE_URL}images/superstore.png`, // put this in /public/images/
        link: "https://github.com/Sang-Luo/Project_Sales_Dashboards",
      },
      {
        title: "PHP E-Commerce Site",
        description:
          "A dynamic web store built with PHP, MySQL, and Bootstrap. Features user roles, inventory management, and shopping cart functionality.",
        image: `${import.meta.env.BASE_URL}images/ecommerce.png`,
        link: "https://github.com/YOUR_USERNAME/php-ecommerce",
      },
      {
        title: "Tic Tac Toe (Java)",
        description:
          "A simple console-based game written in Java with logic handling for win/tie scenarios and player turns.",
        image: `${import.meta.env.BASE_URL}images/tictactoe.png`,
        link: "https://github.com/Sang-Luo/Tic-Tech-Toe",
      },
    ];
  
    return (
      <section
        id="projects"
        className="bg-gray-950 text-white py-16 px-4 md:px-12 lg:px-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>
  
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
            <div className="w-full h-40 bg-gray-700 flex items-center justify-center text-sm italic text-gray-400">
            [Image here]
            </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white underline text-sm"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  
