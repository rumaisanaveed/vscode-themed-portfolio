import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import { ThemeProvider } from "./context/ThemeContext";
import Articles from "./features/articles/Articles";
import Contact from "./features/contact/Contact";
import ErrorPage from "./features/error/ErrorPage";
import Experience from "./features/experience/Experience.jsx";
import Home from "./features/home/Home";
import Projects from "./features/projects/Projects.jsx";
import Settings from "./features/settings/Settings";
import TechStack from "./features/techStack/TechStack";
import Hackathons from "./features/hackathons/Hackathons.jsx";

const router = createBrowserRouter([
  {
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tech-stack",
        element: <TechStack />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/hackathons",
        element: <Hackathons />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
