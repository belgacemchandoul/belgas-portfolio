import ProjectDetailsPage from "../components/ProjectDetailsPage";
import projectsDetails from "../data/projectsDetails.json";
const EmotiScan = () => {
  return (
    <ProjectDetailsPage
      title="EmotiScan"
      description="EmotiScan is a web app that analyzes emotions and sentiments in text, using machine learning to detect tone and sentiment."
      imgSrc="/emotiscan.png"
      summary="EmotiScan is a web-based application designed to analyze the emotions and sentiments of any text by leveraging powerful machine learning models. Users can enter any text, and the app processes the input using pre-trained models to detect the emotional tone and sentiment breakdown—whether positive, negative, or neutral. Visual charts then display the results, making it easy to interpret the emotions present in the text and gain insights into the overall sentiment."
      features={[
        {
          feature: "Emotion Detection",
          featureDesc:
            "Detects various emotions (e.g., joy, sadness, anger) from the input text using advanced AI models.",
        },
        {
          feature: "Sentiment Analysis",
          featureDesc:
            "Provides a sentiment score breakdown (positive, negative, and neutral) to understand the overall tone of the text.",
        },
        {
          feature: "Visualized Results",
          featureDesc:
            "Data is presented with easy-to-understand visualizations, including pie charts for emotion distribution and bar charts for sentiment breakdown.",
        },
        {
          feature: "Interactive UI",
          featureDesc:
            "Clean, modern UI built using ReactJS, Framer Motion, and Tailwind CSS for an interactive and smooth user experience.",
        },
        {
          feature: "API Integration",
          featureDesc:
            "Uses Hugging Face APIs to power emotion and sentiment analysis.",
        },
      ]}
      techStack={projectsDetails[2].techStack.map((item) => ({
        name: item.name,
        link: item.link,
        desc: item.description,
      }))}
    />
  );
};

export default EmotiScan;
