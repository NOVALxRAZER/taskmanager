/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
// import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";
import Siberwander1 from "pages/Siberwander/Siberwander1";
import Siberwander2 from "pages/Siberwander/Siberwander2";
import Siberwander3 from "pages/Siberwander/Siberwander3";
import Siberwander4 from "pages/Siberwander/Siberwander4";
import Siberwander5 from "pages/Siberwander/Siberwander5";
import Siberwander6 from "pages/Siberwander/Siberwander6";
import Siberwander7 from "pages/Siberwander/Siberwander7";
import Siberwander8 from "pages/Siberwander/Siberwander8";
import Siberwander9 from "pages/Siberwander/Siberwander9";
import Siberwander10 from "pages/Siberwander/Siberwander10";
import Siberwander11 from "pages/Siberwander/Siberwander11";
import Siberwander12 from "pages/Siberwander/Siberwander12";
import Siberwander13 from "pages/Siberwander/Siberwander13";
import Siberwander14 from "pages/Siberwander/Siberwander14";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "about us",
            route: "/partner",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/contact-us",
            component: <ContactUs />,
          },
          {
            name: "author",
            route: "/company",
            component: <Author />,
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/sign-in",
            component: <SignIn />,
          },
        ],
      },
      {
        name: "siber",
        collapse: [
          {
            name: "siberwander1",
            route: "/solutions/cloud-native-application-protection-platform",
            component: <Siberwander1 />,
          },
          {
            name: "siberwander2",
            route: "/solutions/cloud-security-posture-management",
            component: <Siberwander2 />,
          },
          {
            name: "siberwander3",
            route: "/solutions/cloud-workload-protection-platform",
            component: <Siberwander3 />,
          },
          {
            name: "siberwander4",
            route: "/solutions/cloud-infrastructure-entitlement-management",
            component: <Siberwander4 />,
          },
          {
            name: "siberwander5",
            route: "/solutions/data-security-posture-management",
            component: <Siberwander5 />,
          },
          {
            name: "siberwander6",
            route: "/solutions/container-and-kubernetes-security",
            component: <Siberwander6 />,
          },
          {
            name: "siberwander7",
            route: "/solutions/multi-cloud-compliance",
            component: <Siberwander7 />,
          },
          {
            name: "siberwander8",
            route: "/solutions/vulnerability-management",
            component: <Siberwander8 />,
          },
          {
            name: "siberwander9",
            route: "/solutions/api-security",
            component: <Siberwander9 />,
          },
          {
            name: "siberwander10",
            route: "/solutions/cloud-detection-and-response",
            component: <Siberwander10 />,
          },
          {
            name: "siberwander11",
            route: "/solutions/shift-left-security",
            component: <Siberwander11 />,
          },
          {
            name: "siberwander12",
            route: "/solutions/ai-security-posture-management",
            component: <Siberwander12 />,
          },
          {
            name: "siberwander13",
            route: "/solutions/ai-driven-cloud-security",
            component: <Siberwander13 />,
          },
          {
            name: "siberwander14",
            route: "/solutions/agentless-sidescanning",
            component: <Siberwander14 />,
          },
        ],
      },
    ],
  },
  // {
  //   name: "sections",
  //   icon: <Icon>view_day</Icon>,
  //   collapse: [
  //     {
  //       name: "page sections",
  //       description: "See all sections",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "page headers",
  //           route: "/sections/page-sections/page-headers",
  //           component: <PageHeaders />,
  //         },
  //         {
  //           name: "features",
  //           route: "/sections/page-sections/features",
  //           component: <Features />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "navigation",
  //       description: "See all navigations",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "navbars",
  //           route: "/sections/navigation/navbars",
  //           component: <Navbars />,
  //         },
  //         {
  //           name: "nav tabs",
  //           route: "/sections/navigation/nav-tabs",
  //           component: <NavTabs />,
  //         },
  //         {
  //           name: "pagination",
  //           route: "/sections/navigation/pagination",
  //           component: <Pagination />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "input areas",
  //       description: "See all input areas",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "inputs",
  //           route: "/sections/input-areas/inputs",
  //           component: <Inputs />,
  //         },
  //         {
  //           name: "forms",
  //           route: "/sections/input-areas/forms",
  //           component: <Forms />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "attention catchers",
  //       description: "See all examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "alerts",
  //           route: "/sections/attention-catchers/alerts",
  //           component: <Alerts />,
  //         },
  //         {
  //           name: "modals",
  //           route: "/sections/attention-catchers/modals",
  //           component: <Modals />,
  //         },
  //         {
  //           name: "tooltips & popovers",
  //           route: "/sections/attention-catchers/tooltips-popovers",
  //           component: <TooltipsPopovers />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "elements",
  //       description: "See all 32 examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "avatars",
  //           route: "/sections/elements/avatars",
  //           component: <Avatars />,
  //         },
  //         {
  //           name: "badges",
  //           route: "/sections/elements/badges",
  //           component: <Badges />,
  //         },
  //         {
  //           name: "breadcrumbs",
  //           route: "/sections/elements/breadcrumbs",
  //           component: <BreadcrumbsEl />,
  //         },
  //         {
  //           name: "buttons",
  //           route: "/sections/elements/buttons",
  //           component: <Buttons />,
  //         },
  //         {
  //           name: "dropdowns",
  //           route: "/sections/elements/dropdowns",
  //           component: <Dropdowns />,
  //         },
  //         {
  //           name: "progress bars",
  //           route: "/sections/elements/progress-bars",
  //           component: <ProgressBars />,
  //         },
  //         {
  //           name: "toggles",
  //           route: "/sections/elements/toggles",
  //           component: <Toggles />,
  //         },
  //         {
  //           name: "typography",
  //           route: "/sections/elements/typography",
  //           component: <Typography />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: "docs",
  //   icon: <Icon>article</Icon>,
  //   collapse: [
  //     {
  //       name: "getting started",
  //       description: "All about overview, quick start, license and contents",
  //       href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
  //     },
  //     {
  //       name: "foundation",
  //       description: "See our colors, icons and typography",
  //       href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
  //     },
  //     {
  //       name: "components",
  //       description: "Explore our collection of fully designed components",
  //       href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
  //     },
  //     {
  //       name: "plugins",
  //       description: "Check how you can integrate our plugins",
  //       href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
  //     },
  //   ],
  // },
  // {
  //   name: "github",
  //   icon: <GitHubIcon />,
  //   href: "https://www.github.com/creativetimofficial/material-kit-react",
  // },
];

export default routes;
