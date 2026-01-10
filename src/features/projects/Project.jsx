import Tag from "./Tag";

function Project({ img, title, desc, tags, srcCode, demo, achievements }) {
  return (
    <div className="flex flex-col text-textColor">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-base font-medium">{desc}</p>
        <h3 className="text-xl font-semibold">Project Achievements</h3>
        <ul className="list-disc ml-8">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
        <div className="flex flex-wrap max-w-full lg:max-w-2xl">
          {tags.map((tag) => {
            return <Tag key={tag} tagName={tag} />;
          })}
        </div>
        <div className="space-x-2">
          {srcCode && (
            <a
              href={srcCode}
              className="px-1 py-1 text-lg font-semibold underline decoration-accentColor hover:bg-accentColor"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              className="px-1 py-1 text-lg font-semibold underline decoration-accentColor hover:border-2 hover:border-accentColor hover:no-underline  "
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
      <div className="self-center">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-contain object-center"
        />
      </div>
    </div>
  );
}

export default Project;
