import { Helmet, HelmetProvider } from "react-helmet-async";
import { projectsData } from "./projects";
import Project from "./Project";

function Projects() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Rumaisa Naveed | Projects</title>
      </Helmet>
      <div className="w-full bg-mainBg p-4 lg:p-8">
        <h1 className="pb-5 text-3xl text-textColor">
          Stuff I&apos;ve Built So Far
        </h1>
        <div className="grid grid-cols-1 gap-y-5 max-w-4xl">
          {projectsData.map((p) => {
            return (
              <Project
                key={p.title}
                title={p.title}
                desc={p.description}
                img={p.image}
                srcCode={p.sourceCode}
                demo={p.demo}
                tags={p.tags}
                achievements={p.achievements}
              />
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Projects;
