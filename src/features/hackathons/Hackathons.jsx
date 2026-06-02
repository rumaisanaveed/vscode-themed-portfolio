import { Helmet, HelmetProvider } from "react-helmet-async";
import HackathonCard from "./HackathonCard";
import { hackathonsData } from "./hackathon";

function Hackathons() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Rumaisa Naveed | Hackathons</title>
      </Helmet>

      <div className="min-h-screen w-full bg-mainBg p-4 md:py-8 md:px-0">
        <div className="">
          <h1 className="mb-10 text-3xl text-textColor">
            Hackathon
            <span className="underline decoration-accentColor">
              Experience
            </span>
          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            {hackathonsData.map((hackathon, index) => (
              <HackathonCard key={index} hackathon={hackathon} />
            ))}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
export default Hackathons;