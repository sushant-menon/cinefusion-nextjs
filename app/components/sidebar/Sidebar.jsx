"use client";
import { SidebarMenu } from "../../../constants/SidebarMenu";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(state => state.app.isSidebarOpen);

  const handleLinkClick = () => {
    if (isSidebarOpen) {
      dispatch(toggleSidebar());
    }
  };

  if (!isSidebarOpen) return null;

  return (
    <>
      <div className="flex flex-col items-center bg-gray-800 h-screen w-[100px] lg:w-[200px] min-h-screen xl:justify-evenly space-y-10 xl:space-y-0 pt-10 xl:pt-0">
        {SidebarMenu.map((item, index) => {
          return (
            <ul
              className="hover:bg-red-600 duration-500 w-full text-center py-2 px-3 rounded-lg"
              key={index}
            >
              <Link
                className="text-white xl:text-xl"
                href={item.path}
                onClick={handleLinkClick}
              >
                {item.title}
              </Link>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
