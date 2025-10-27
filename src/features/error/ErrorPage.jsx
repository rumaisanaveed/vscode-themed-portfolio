import { useTheme } from "../../context/ThemeContext";

function ErrorPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex h-[100vh] items-center justify-center theme-${theme} bg-mainBg text-textColor`}
    >
      <p className="text-2xl font-bold">
        Oops! Something went wrong... Try to refresh the page or try again
        later.
      </p>
    </div>
  );
}

export default ErrorPage;
