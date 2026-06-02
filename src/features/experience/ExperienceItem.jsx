const ExperienceItem = ({ experience }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:max-w-3xl">
      <p className="text-xl font-semibold text-accentColor">
        {experience.duration}
      </p>
      <div>
        <h2 className="text-lg font-semibold text-textColor mb-2">
          {experience.title}
        </h2>
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
