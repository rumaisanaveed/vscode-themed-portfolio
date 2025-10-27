import Tag from "./Tag";

function ProjectCard({ img, title, desc, tags, srcCode, demo }) {
  return (
    <div className="flex cursor-pointer flex-col rounded-xl bg-articleBg text-textColor hover:shadow-lg 2xl:w-[400px]">
      <div className="relative aspect-[3/2] w-full max-w-[360px] overflow-hidden rounded-lg md:max-w-[400px]">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="flex flex-col gap-y-2 p-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-base font-medium">{desc}</p>
        <div>
          {tags.map((tag) => {
            return <Tag key={tag} tagName={tag} />;
          })}
        </div>
        <div className="space-x-2">
          {srcCode && (
            <a
              href={srcCode}
              className="px-1 py-1 text-lg font-semibold underline  decoration-accentColor hover:bg-accentColor"
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
    </div>
  );
}

export default ProjectCard;
