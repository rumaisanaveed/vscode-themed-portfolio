import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ProfilePic from "../../assets/images/profile.jpeg";

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Rumaisa Naveed | Home</title>
      </Helmet>
      <div className="flex w-full flex-col items-start justify-center gap-2 p-5 md:gap-5">
        <div className="h-44 w-44 rounded-full">
          <img src={ProfilePic} alt="Profile Pic" className="rounded-full" />
        </div>
        <h2 className="text-3xl font-semibold text-[#eee] md:text-5xl">
          Hey! I'm Rumaisa
        </h2>
        <div>
          <p className="text-lg font-medium text-[#eee] md:text-xl">
            I'm a Software Engineer with a primary focus in frontend development
            and expertise in React.js, Next.js and React Native. I've interest
            in both mobile and web application development.And, I'm passionate
            about building scalable and user-friendly web applications, solving
            complex problems, and delivering impactful results. Highly adaptable
            and quick to learn, I thrive in collaborative environments where I
            can contribute meaningfully while growing both personally and
            professionally. In my free time, I write articles to share my tech
            learnings and insights from my personal and professional journey.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            download="RumaisaResume - Frontend Developer"
            target="_blank"
            to="/resume.pdf"
            className="bg-accentColor px-6 py-2.5 font-medium text-white md:px-9 md:text-xl"
          >
            Download Resume
          </Link>
          <Link to="/contact">
            <button className="border-2 border-accentColor px-5 py-2 text-textColor md:px-8 md:text-xl">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Home;
