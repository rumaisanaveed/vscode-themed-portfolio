import ProjectCard from "./ProjectCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { projectsData } from "./projects";

function Projects() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Rumaisa Naveed | Projects</title>
      </Helmet>
      <div className="w-full bg-mainBg p-8">
        <h1 className="pb-5 text-3xl text-textColor">
          Stuff I&apos;ve Built So Far
        </h1>
        <div className="3xl:grid-cols-4 grid gap-y-5 md:grid-cols-2 md:gap-x-5 lg:max-w-2xl xl:max-w-5xl xl:grid-cols-3 2xl:max-w-fit">
          {projectsData.map((p) => {
            return (
              <ProjectCard
                key={p.title}
                title={p.title}
                desc={p.description}
                img={p.image}
                srcCode={p.sourceCode}
                demo={p.demo}
                tags={p.tags}
              />
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Projects;
