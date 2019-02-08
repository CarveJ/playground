import Record from "./components/record";
import Activities from "./components/activities";
import Schedule from "./components/schedule.js";
import App from "./App";

const routes = [
  {
    component: App,
    routes: [
      {
        path: "/record",
        exact: true,
        component: Record
      },
      {
        path: "/activitiesList",
        exact: true,
        component: Activities
      },
      {
        path: "/schedule",
        exact: true,
        component: Schedule
      }
    ]
  }
];

export default routes;
