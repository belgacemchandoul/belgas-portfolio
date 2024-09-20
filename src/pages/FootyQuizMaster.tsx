import ProjectDetailsPage from "../components/ProjectDetailsPage";
import projectsDetails from "../data/projectsDetails.json";
const FootyQuizMaster = () => {
  return (
    <ProjectDetailsPage
      title="Footy quiz master"
      description="FootyQuizMaster is a fun web app with four quiz modes to challenge football fans' knowledge."
      imgSrc="/footyquizmaster.png"
      summary="FootyQuizMaster is a fun and interactive web app that challenges users' football knowledge through four unique quiz modes, making it perfect for football enthusiasts. From guessing players based on career paths to comparing goal tallies and predicting historical match results, the app offers a variety of ways to test and improve your football trivia skills."
      features={[
        {
          feature: "Who Am I?",
          featureDesc:
            "Guess the player based on their career path, progressing through various clubs and leagues.",
        },
        {
          feature: "Who Has More Goals?",
          featureDesc:
            "Compare two players and guess who scored more career goals. The game continues until you lose.",
        },
        {
          feature: "Who's Missing?",
          featureDesc:
            " Given a football squad with a missing player and details about the event, match, result, and phase, guess the missing player.",
        },
        {
          feature: "Guess the Result",
          featureDesc:
            "Test your knowledge of football history by guessing the final result of completed historical matches.",
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

export default FootyQuizMaster;
