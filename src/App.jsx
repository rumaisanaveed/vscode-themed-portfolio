import Main from "./components/Main";
import Home from "./features/home/Home";
import Contact from "./features/contact/Contact";
import Projects from "./features/projects/Projects";
import Articles from "./features/articles/Articles";
import Github, { loader as GithubLoader } from "./features/github/Github";
import Settings from "./features/settings/Settings";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ErrorPage from "./features/error/ErrorPage";
import TechStack from "./features/techStack/TechStack";
import { Experience } from "./features/experience/Experience";

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
        path: "/github",
        element: <Github />,
        loader: GithubLoader,
      },
      {
        path: "/experience",
        element: <Experience />,
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
