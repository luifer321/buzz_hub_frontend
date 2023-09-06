import { ISidebarItem } from "../interfaces/ISidebarItem";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";

export const sidebarItems: ISidebarItem[] = [
  {
    name: "Home",
    icon: <AiFillHome />,
    path: "/",
  },
  {
    name: "Explore",
    icon: <AiOutlineSearch />,
    path: "/explore",
  },
  {
    name: "Messages",
    icon: <AiOutlineMail />,
    path: "/messages",
  },
  {
    name: "Profile",
    icon: <AiOutlineUser />,
    path: "/profile",
  },
];
