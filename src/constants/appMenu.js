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
    id: "documentation",
    fileName: "documentation.mdx",
  },
  {
    title: "Introduction",
    children: [
      {
        title: "Where will topcoder application live?",
        path: "/model/introduction/topcoder-applications",
        id: "topcoder-applications",
        fileName: "topcoder-applications.mdx",
        filePath: "/introduction",
      },
      {
        title: "Where will my code live?",
        path: "/model/introduction/topcoder-code",
        id: "topcoder-code",
        fileName: "topcoder-code.mdx",
        filePath: "/introduction",
      },
      {
        title: "Application deployment and revision",
        path: "/model/introduction/topcoder-deploy-revise",
        id: "topcoder-deploy-revise",
        fileName: "topcoder-deploy-revise.mdx",
        filePath: "/introduction",
      }
    ],
  },
  {
    title: "What are our Standards?",
    children: [
      {
        title: "API Standards",
        path: "/model/standards/api-standards",
        id: "api-standards",
        fileName: "api-standards.mdx",
        filePath: "/standards",
      },
      {
        title: "Publish / Receive Events",
        path: "/model/standards/publish-receive-events",
        id: "publish-receive-events",
        fileName: "publish-receive-events.mdx",
        filePath: "/standards",
      },
      {
        title: "DynamoDB Database",
        path: "/model/standards/dynamodb-database",
        id: "dynamodb-database",
        fileName: "dynamodb-database.mdx",
        filePath: "/standards",
      }
    ]
  },
  {
    title: "Micro Frontends Features",
    children: [
      {
        title: "Authentication",
        path: "/model/micro-frontends/auth-demo",
        id: "auth-demo",
        fileName: "auth-demo.mdx",
        filePath: "/micro-frontends",
      },
      {
        title: "Toggling Sidebar",
        path: "/model/micro-frontends/no-sidebar-demo",
        id: "no-sidebar-demo",
        fileName: "no-sidebar-demo.mdx",
        filePath: "/micro-frontends",
      },
    ],
  },
  {
    title: "Topcoder APIs",
    children: [
      {
        title: "Member V5 Swagger",
        path: "/model/topcoder-apis/member-v5-swagger",
        id: "member-v5-swagger",
        fileName: "member-v5-swagger.mdx",
        filePath: "/topcoder-apis",
      },
      {
        title: "Challenge V5 Swagger",
        path: "/model/topcoder-apis/challenge-v5-swagger",
        id: "challenge-v5-swagger",
        fileName: "challenge-v5-swagger.mdx",
        filePath: "/topcoder-apis",
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
        fileName: "api-example.mdx",
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
  }
];

export default appMenu;
