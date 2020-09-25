import PublicLayout from "./layouts/App";
import AdminLayout from "./layouts/Admin";
// public component
import Login from "./components/Login";
import Image from "./view/client/images/index";

//admin component
const routes = [
  {
    path: "/",
    name: "home",
    component: PublicLayout,
    children: [
      {
        path: "/login",
        component: Login
      },
      {
        path: "/image",
        component: Image
      }
    ]
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminLayout
  }
];

export default routes;
