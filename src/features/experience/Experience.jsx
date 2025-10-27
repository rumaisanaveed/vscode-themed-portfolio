import ExperienceItem from "./ExperienceItem";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ExperienceData } from "./experience";

function Experience() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Rumaisa Naveed | Experience</title>
      </Helmet>
      <div className="w-full bg-mainBg p-8 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center">
        <h1 className="pb-5 text-3xl text-textColor">
          Working&nbsp;
          <span className="underline decoration-accentColor">Experience</span>
        </h1>
        <div className="flex flex-col gap-4">
          {ExperienceData.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Experience;
