/**
 * React app side menu structure
 */
import pageIcon from "../assets/images/page-grey.svg";
import pageActiveIcon from "../assets/images/page-green.svg";
import homeIcon from "../assets/images/home.svg";
import homeActiveIcon from "../assets/images/home-green.svg";

const appMenu = [
  {
    title: "Documentation",
    path: "/model",
    icon: pageIcon,
    activeIcon: pageActiveIcon,
  },
  {
    title: "Micro Frontends",
    children: [
      {
        title: "Auth Demo",
        path: "/model/mfe/auth",
      },
      {
        title: "No Sidebar Demo",
        path: "/model/mfe/no-sidebar",
      },
    ],
  },
  {
    title: "Member V5",
    children: [
      {
        title: "Swagger",
        path: "/model/member-v5-api/member-swagger",
        id: "member-swagger",
        fileName: "member-swagger.mdx",
        filePath: "/member-v5-api",
      },
    ],
  },
  {
    title: "Challenge V5",
    children: [
      {
        title: "Swagger",
        path: "/model/challenge-v5-api/challenge-swagger",
        id: "challenge-swagger",
        fileName: "challenge-swagger.mdx",
        filePath: "/challenge-v5-api",
      },
    ],
  },
  {
    title: "Help",
    children: [
      {
        title: "How to Add Pages",
        path: "/model/help/add-pages",
        id: "add-pages",
        fileName: "add-pages.mdx",
        filePath: "/help",
      },
      {
        title: "How to document API's",
        path: "/model/help/api-example",
        id: "api-example",
        fileName: "api_example.mdx",
        filePath: "/help",
      },
      {
        title: "How to use MDX Components",
        path: "/model/help/mdx-component-example",
        id: "mdx-component-example",
        fileName: "mdx-component-example.mdx",
        filePath: "/help",
      },
    ],
  },
];

export default appMenu;
