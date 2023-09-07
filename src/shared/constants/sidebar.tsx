import { ISidebarItem } from "../interfaces/ISidebarItem";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineMail,
  AiOutlineUser,
  AiFillHome,
  AiFillMail,
} from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";

export const sidebarItems: ISidebarItem[] = [
  {
    name: "Home",
    icon: <AiOutlineHome />,
    activeIcon: <AiFillHome />,
    path: "/",
  },
  {
    name: "Explore",
    icon: <AiOutlineSearch />,
    path: "/explore",
    activeIcon: <HiSearch />,
  },
  {
    name: "Messages",
    icon: <AiOutlineMail />,
    path: "/messages",
    activeIcon: <AiFillMail />,
  },
  {
    name: "Profile",
    icon: <AiOutlineUser />,
    path: "/profile",
    activeIcon: <BiSolidUser />,
  },
];
