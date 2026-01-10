import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

function Pages() {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-mainBg">
      <Tabs />
      <section className="bg-mainBg">
        <Outlet />
      </section>
    </div>
  );
}

export default Pages;
