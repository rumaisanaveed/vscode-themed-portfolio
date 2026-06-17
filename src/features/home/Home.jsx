import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ProfilePic from "../../assets/images/profile.jpeg";

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Rumaisa Naveed | Home</title>
      </Helmet>
      <div className="flex w-full flex-col items-start justify-start gap-2 p-5 md:gap-5 2xl:mx-auto 2xl:max-w-5xl 2xl:items-center">
        <div className="h-44 w-44 self-center rounded-full md:self-start 2xl:self-center">
          <img
            src={ProfilePic}
            alt="Profile Pic"
            className="h-44 w-44 rounded-full object-center"
          />
        </div>
        <h2 className="text-3xl font-semibold text-[#eee] md:text-5xl">
          Hey! I'm Rumaisa
        </h2>
        <div>
          <p className="text-lg font-light text-[#eee] md:text-xl">
            Frontend Developer with 1+ year of experience in frontend and mobile application development, 
            specializing in React.js & React Native with a solid experience in Next.js & Angular. Experienced working
            in both service-based and product-based organizations, collaborating with cross-functional teams.
            Focused on building scalable web and mobile applications, integrating RESTful APIs, third party services, 
            payment systems including Stripe and delivering responsive, user-centric user experiences. A 
            strong team player with a commitment to continuous learning, code quality, creative thinking,
            excellent problem solving skills & a collaborative mindset.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-6">
          <a
            target="_blank"
            href="/resume.pdf"
            className="bg-accentColor px-1.5 py-2 font-normal text-white md:px-9 text-sm md:text-xl"
            download="RumaisaResume-FrontendDeveloper.pdf"
          >
            Download Resume
          </a>
          <Link to="/contact">
            <button className="border-2 border-accentColor px-5 py-1.5 text-sm text-textColor md:px-8 md:text-xl">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Home;
