const HackathonCard = ({ hackathon }) => {
  return (
    <div className="group rounded-xl border border-accentColor/20 bg-articleBg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accentColor/50 w-[400px]">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-accentColor/10 px-3 py-1 text-sm text-accentColor">
          {hackathon.date}
        </span>

        {hackathon.position && (
          <span className="text-sm font-medium text-accentColor">
            {hackathon.position}
          </span>
        )}
      </div>

      <h2 className="mb-4 text-xl font-semibold text-textColor">
        {hackathon.title}
      </h2>

      {hackathon.certificate && (
        <img
          src={hackathon.certificate}
          alt={`${hackathon.title} Certificate`}
          className="mb-4 h-48 w-full rounded-lg object-contain border border-accentColor/20"
        />
      )}

      <p className="mb-4 text-sm leading-7 text-gray-300">
        {hackathon.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {hackathon.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-mainBg px-2 py-1 text-xs text-accentColor"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HackathonCard;