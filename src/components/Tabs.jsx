import { Link, useLocation } from "react-router-dom";
import { explorerItems } from "../constants";

function Tabs() {
  const location = useLocation();
  return (
    <div className="flex overflow-x-auto bg-tabsBg">
      {explorerItems.map((tab) => {
        return (
          <Link
            key={tab.name}
            to={`${tab.path}`}
            className={`flex ${
              location.pathname === tab.path
                ? " border-t-2 border-t-accentColor bg-tabActiveBg"
                : "border-2 bg-tabBg"
            }   min-w-max gap-x-1  border-tabBorder  px-3 text-textColor   md:py-1`}
          >
            <img src={tab.icon} height={20} width={20} alt="react-icon" />
            <p className=" text-lg font-medium">{tab.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Tabs;
