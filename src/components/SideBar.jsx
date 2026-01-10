import { Link, useLocation } from "react-router-dom";
import { sidebarBottomItems, sidebarTopItems } from "../constants";

function SideBar() {
  const location = useLocation();
  return (
    <aside className="flex w-[4.2vw] min-w-[40px] flex-col justify-between bg-sidebarBg pt-2 pb-8 h-full overflow-y-auto">
      <div className="flex flex-col items-start justify-center gap-y-1 md:gap-y-3">
        {sidebarTopItems.map(({ Icon, path }) => {
          return (
            <Link to={`${path}`} key={path}>
              <div
                className={`${
                  location.pathname === path
                    ? "border-l-2 border-accentColor"
                    : ""
                }  p-2  max-sm:pl-2`}
              >
                <Icon
                  fill={
                    location.pathname === path
                      ? "rgb(225, 228, 232)"
                      : "rgb(106, 115, 125)"
                  }
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center gap-y-3  ">
        {sidebarBottomItems.map(({ Icon, path }) => {
          return (
            <Link to={`${path}`} key={path}>
              <div className="p-2  max-sm:pl-2">
                <Icon
                  fill={
                    location.pathname === path
                      ? "rgb(225, 228, 232)"
                      : "rgb(106, 115, 125)"
                  }
                />
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
export default SideBar;
