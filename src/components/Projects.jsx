function Projects() {
    const projects = [
      {
        title: "Sales Performance Dashboard",
        description:
          "A data visualization dashboard using Python, Matplotlib, and Seaborn to analyze Superstore sales trends and product performance.",
        image: "https://sang-luo.github.io/Portfolio/images/superstore.png", // put this in /public/images/
        link: "https://github.com/Sang-Luo/Project_Sales_Dashboards",
      },
      {
        title: "Data Projects/Assignments",
        description:
          "This is a compilation of Data Projects and Assignments within a course I've taken in my academics.",
        image: "https://sang-luo.github.io/Portfolio/images/dataprojects.png",
        link: "https://github.com/Sang-Luo/Data-Projects-Assignments",
      },
      {
        title: "PHP E-Commerce Site",
        description:
          "A dynamic web store built with PHP, MySQL, and Bootstrap. Features user roles, inventory management, and shopping cart functionality.",
        image: "https://sang-luo.github.io/Portfolio/images/ecommerce.png",
        link: "https://github.com/Sang-Luo/EcommerceWebsite-",
      },
      {
        title: "System Diagnostic Tool (Python CLI)",
        description:
          "A Python-based command-line tool that scans a computer system and generates a detailed diagnostic report. Built to simulate real-world technical support workflows, this tool can assist in identifying issues related to memory, disk usage, network connectivity, CPU usage, and more.",
        image: "https://sang-luo.github.io/Portfolio/images/sdtcli.png",
        link: "https://github.com/Sang-Luo/System-Diagnostic-Tool-CLI-Python-Script-",
      },
      {
        title: "Computer Vision",
        description:
          "This is a compilation of my academic work in a Computer Vision course. Focus on the understanding of edge detection and MLL.",
        image: "https://sang-luo.github.io/Portfolio/images/computervision.png",
        link: "https://github.com/Sang-Luo/Computer-Vision",
      },
      {
        title: "Movie-Ratings-ETL-Visualization-Project",
        description:
          "This project demonstrates a full ETL pipeline using real-world movie data. It loads CSV files, transforms the data with Python (Pandas), stores it in an SQLite database, runs SQL queries, and generates visualizations to extract insights from user ratings and movie genres.",
        image: "https://sang-luo.github.io/Portfolio/images/sqldatapipeline.png",
        link: "https://github.com/Sang-Luo/Movie-Ratings-ETL-Visualization-Project",
      },
      {
        title: "Applied Crypto",
        description:
          "This is a compilation of Applied Crypto Projects and Assignments within a course I've taken in my academics. Focus on basic understanding of best cyber secuirty practices.",
        image: "https://sang-luo.github.io/Portfolio/images/crypto.png",
        link: "https://github.com/Sang-Luo/Applied-Crypto",
      },
      {
        title: "Tic Tac Toe (Java)",
        description:
          "A simple console-based game written in Java with logic handling for win/tie scenarios and player turns.",
        image: "https://sang-luo.github.io/Portfolio/images/tictactoe.png",
        link: "https://github.com/Sang-Luo/Tic-Tech-Toe",
      },
    ];
  
    return (
      <section
        id="projects"
        className="bg-gray-950 text-white py-16 px-4 md:px-12 lg:px-20"
      >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-300 drop-shadow-md">
        Projects
      </h2>

  
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              //data-aos="fade-up"
              //data-aos-delay={index * 100}
              className="bg-[#1e1e1e] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-800"
            >
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x300?text=Image+Not+Found";
                }}
                className="w-full h-40 object-cover rounded-t-xl"
              />
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
  
