/**
 * React app side menu structure
 */
import reactIcon from "../assets/images/react-grey.svg";
import reactActiveIcon from "../assets/images/react-green.svg";
import homeIcon from "../assets/images/home.svg";
import homeActiveIcon from "../assets/images/home-green.svg";

const appMenu = [
  {
    title: "Model App",
    path: "/model",
    icon: reactIcon,
    activeIcon: reactActiveIcon,
  },
  {
    title: "Auth Demo",
    path: "/model/auth",
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  },
  {
    title: "No Sidebar Demo",
    path: "/model/no-sidebar",
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  },
];

export default appMenu;
