import ProjectDetailsPage from "../components/ProjectDetailsPage";
import projectsDetails from "../data/projectsDetails.json";
const HireHaven = () => {
  return (
    <ProjectDetailsPage
      title="Hire Haven"
      description="HireHaven is a job board platform where users can log in, explore jobs, apply, and update their portfolios."
      imgSrc="/hirehaven.png"
      summary="HireHaven is a job board platform that enables users to log in, explore job listings, and apply for jobs while also managing and updating their portfolios, offering a seamless experience for job hunting and career management. Built with modern web development technologies for optimal performance, the app allows users to securely log in via NextAuth, navigate various job listings, search by title or industry, and apply by submitting a resume and cover letter. Additionally, users can manage their personal portfolios by adding new projects, experiences, and skills, enhancing their job applications."
      features={[
        {
          feature: "Job Listings",
          featureDesc: "Browse and search for various job openings.",
        },
        {
          feature: "Job Applications",
          featureDesc:
            "Apply for jobs directly from the platform with a simple and intuitive process.",
        },
        {
          feature: "Portfolio Management",
          featureDesc:
            "Users can create, update, and manage their portfolios to showcase their skills and work experience.",
        },
        {
          feature: "Authentication",
          featureDesc:
            "Secure user login and account management powered by NextAuth.",
        },
        {
          feature: "Responsive Design",
          featureDesc:
            "Clean and modern design, ensuring an optimal experience across devices.",
        },
      ]}
      techStack={projectsDetails[1].techStack.map((item) => ({
        name: item.name,
        link: item.link,
        desc: item.description,
      }))}
    />
  );
};

export default HireHaven;
