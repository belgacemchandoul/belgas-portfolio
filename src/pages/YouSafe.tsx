import ProjectDetailsPage from "../components/ProjectDetailsPage";
import projectsDetails from "../data/projectsDetails.json";

const YouSafe = () => {
  return (
    <ProjectDetailsPage
      title="YouSafe"
      description="YouSafe is a wheelchair accessibility platform helping users find verified accessible places across Dublin."
      imgSrc="/yousafe.png"
      summary="YouSafe is a wheelchair accessibility platform focused on Dublin, Ireland, designed to help users easily find and explore accessible locations such as restaurants, hotels, transport hubs, hospitals, and parks. Every location is carefully verified, rated, and enriched with real accessibility details to ensure reliability and trust. The platform features an interactive map powered by Leaflet, allowing users to visually navigate the city and discover accessible places nearby. It also includes an admin dashboard where accessibility data can be managed efficiently, along with blog support for sharing updates and insights. Built with modern technologies, YouSafe ensures performance, scalability, and a smooth user experience across devices."
      features={[
        {
          feature: "Accessibility Discovery",
          featureDesc:
            "Find wheelchair-friendly restaurants, hotels, transport, hospitals, parks, and more across Dublin.",
        },
        {
          feature: "Verified Locations",
          featureDesc:
            "Every place is reviewed and enriched with real accessibility details for accuracy and trust.",
        },
        {
          feature: "Interactive Map",
          featureDesc:
            "Explore accessible locations visually using an interactive map powered by Leaflet.",
        },
        {
          feature: "Admin Dashboard",
          featureDesc:
            "Manage locations, content, and accessibility data efficiently through a secure admin panel.",
        },
        {
          feature: "Authentication",
          featureDesc:
            "Secure admin access and session handling powered by NextAuth.",
        },
        {
          feature: "Responsive Design",
          featureDesc:
            "Optimized experience across all devices with a clean and modern UI.",
        },
      ]}
      techStack={projectsDetails[0].techStack.map((item) => ({
        name: item.name,
        link: item.link,
        desc: item.description,
      }))}
    />
  );
};

export default YouSafe;
