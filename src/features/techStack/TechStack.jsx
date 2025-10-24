import { Helmet, HelmetProvider } from "react-helmet-async";
import { techStack } from "./constants";

function TechStack() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Rumaisa Naveed | Tech Stack</title>
      </Helmet>
      <div className="flex flex-col gap-6 p-6">
        <h3 className="text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-5">
          {techStack.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-4"
              >
                <img
                  className="h-14 w-14 cursor-pointer rounded-full p-2 shadow-md shadow-accentColor lg:h-20 lg:w-20"
                  key={i}
                  src={item.icon}
                  alt="Tech Stack"
                />
                <p className="text-sm font-medium text-accentColor md:text-lg">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default TechStack;
