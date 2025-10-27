import { themeInfo } from "./constants";
import ThemeCard from "./ThemeCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Settings() {
  return (
    <HelmetProvider>
      <div className="p-8">
        <Helmet>
          <title>Rumaisa Naveed | Settings</title>
        </Helmet>
        <h2 className="text-3xl font-semibold text-textColor">Manage Themes</h2>
        <div className="grid gap-5 pt-8 md:grid-cols-3 xl:grid-cols-4">
          {themeInfo.map((th) => {
            return (
              <ThemeCard
                key={th.name}
                name={th.name}
                img={th.img}
                publisher={th.publisher}
                theme={th.theme}
              />
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Settings;
