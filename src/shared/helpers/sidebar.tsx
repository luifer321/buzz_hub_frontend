import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";

export function renderIcon(icon: string): JSX.Element | null {
  switch (icon) {
    case "AiFillHome":
      return <AiFillHome />;
    case "SlMagnifier":
      return <AiOutlineSearch />;
    case "AiOutlineMail":
      return <AiOutlineMail />;
    case "AiOutlineUser":
      return <AiOutlineUser />;
    default:
      return null;
  }
}
