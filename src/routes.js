import PublicLayout from "./layouts/App";
import AdminLayout from "./layouts/Admin";
// public component
import Image from "./view/client/images/index";
import ImageDetail from "./view/client/images/_id";
import About from "./view/client/About";
//admin component
const routes = [
  {
    path: "/",
    name: "home",
    component: PublicLayout,
    children: [
      {
        path: "/",
        component: Image
      },
      {
        path: "/images/:id",
        name: 'imageDetail',
        component: ImageDetail
      },
      {
        path: "/about",
        component: About
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
