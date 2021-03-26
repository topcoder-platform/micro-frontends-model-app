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
        title: "DynamoDB Database",
        path: "/model/standards/dynamodb-database",
        id: "dynamodb-database",
        fileName: "dynamodb-database.mdx",
        filePath: "/standards",
      },
      {
        title: "PostgreSQL Database",
        path: "/model/standards/postgresql-database",
        id: "postgresql-database",
        fileName: "postgresql-database.mdx",
        filePath: "/standards",
      },
      {
        title: "Publish / Receive Events (Bus API)",
        path: "/model/standards/publish-receive-events",
        id: "publish-receive-events",
        fileName: "publish-receive-events.mdx",
        filePath: "/standards",
      },
      {
        title: "Publish / Receive Events (Kafka)",
        path: "/model/standards/kafka",
        id: "kafka",
        fileName: "kafka.mdx",
        filePath: "/standards",
      },
      {
        title: "JWT Token Scopes",
        path: "/model/standards/jwt-token-scopes",
        id: "jwt-token-scopes",
        fileName: "jwt-token-scopes.mdx",
        filePath: "/standards",
      },
      {
        title: "Logging Standards",
        path: "/model/standards/logging-standard",
        id: "logging-standard",
        fileName: "logging-standard.mdx",
        filePath: "/standards",
      }
    ]
  },
  {
    title: "Build and Deploy",
    children: [
      {
        title: "CircleCI Master Deploy Script",
        path: "/model/build-and-deploy/circleci-master-deploy-script",
        id: "circleci-master-deploy-script",
        fileName: "circleci-master-deploy-script.mdx",
        filePath: "/build-and-deploy",
      },
      {
        title: "Master & Setup Scripts",
        path: "/model/build-and-deploy/master-setup-scripts",
        id: "master-setup-scripts",
        fileName: "master-setup-scripts.mdx",
        filePath: "/build-and-deploy",
      },
      {
        title: "In-depth Master & Setup Scripts",
        path: "/model/build-and-deploy/in-depth-master-setup-scripts",
        id: "in-depth-master-setup-scripts",
        fileName: "in-depth-master-setup-scripts.mdx",
        filePath: "/build-and-deploy",
      },
      {
        title: "Master Script Concept & Execution Process",
        path: "/model/build-and-deploy/master-script-concept-execution-process",
        id: "master-script-concept-execution-process",
        fileName: "master-script-concept-execution-process.mdx",
        filePath: "/build-and-deploy",
      }
    ]
  },
  {
    title: "Micro Frontends",
    children: [
      {
        title: "What is Micro frontend?",
        path: "/model/micro-frontends/what-is-mfe",
        id: "what-is-mfe",
        fileName: "what-is-mfe.mdx",
        filePath: "/micro-frontends",
      },
      {
        title: "Deployment Architecture",
        path: "/model/micro-frontends/deployment-architecture-mfe",
        id: "deployment-architecture-mfe",
        fileName: "deployment-architecture-mfe.mdx",
        filePath: "/micro-frontends",
      },
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
      {
        title: "Copilots - Link this site!",
        path: "/model/help/copilots-link",
        id: "copilots-link",
        fileName: "copilots-link.mdx",
        filePath: "/help",
      },
    ],
  }
];

export default appMenu;
