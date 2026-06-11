const ExperienceItem = ({ experience }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:max-w-3xl">
      <p className="text-xl font-semibold text-accentColor">
        {experience.duration}
      </p>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <a target="_blank" href={experience.website}>
            <img className="h-6 w-6 object-contain" src={experience.logo} alt="Company Logo" />
          </a>
          <h2 className="text-lg font-semibold text-textColor">
            {experience.title}
          </h2>
        </div>
        <ul className="list-disc">
          {experience.description.map((desc, index) => (
            <li key={index} className="text-sm font-medium text-gray-300">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
