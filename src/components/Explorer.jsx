import { useState } from "react";
import { Link } from "react-router-dom";
import ChevronRight from "./icons/ChevronRight";
import { explorerItems } from "../constants";

function Explorer() {
  const [show, setShow] = useState(true);
  return (
    <div className="flex flex-col items-start bg-explorerBg text-white max-sm:hidden">
      <h1 className="pl-2 text-2xl font-medium uppercase">Explorer</h1>
      <div className="flex min-w-[15vw]  flex-col">
        <div
          className="flex cursor-pointer items-center pl-1 pt-2 "
          onClick={() => setShow(!show)}
        >
          <ChevronRight style={show ? { transform: "rotate(90deg)" } : {}} />
          <p htmlFor="portfolio-checkbox" className="text-lg font-semibold">
            RUMAISA PORTFOLIO
          </p>
        </div>
        {show && (
          <div className="px-5">
            {explorerItems.map((item) => {
              return (
                <Link
                  to={`${item.path}`}
                  key={item.name}
                  className=" flex gap-x-1 hover:bg-explorerHoverBg"
                >
                  <img src={item.icon} alt={item.name} height={20} width={20} />
                  <p className="text-lg font-medium">{item.name}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Explorer;
