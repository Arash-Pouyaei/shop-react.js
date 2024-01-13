import {Landingpage} from "./Landingpage";
import Formloginadmin from "./admin/Formloginadmin";
import Formloginuser from "./users/Formloginuser";
import Paneladmin from "./admin/Paneladmin";
import Addproduct from "./admin/components/Addproduct";
import Editproduct from "./admin/components/Editproduct";
import Paneluser from "./users/Paneluser";
import Formregisteruser from "./users/Formregisteruser";
import Notfound from "./Notfound";
import { Shoppingcart } from "./users/Shoppingcart";


export const routes = [
  {
    path: "/",
    label: "Landing page",
    component: Landingpage,
    routes: [
      {
        path: "/form-admin",
        label: "form admin",
        component: Formloginadmin,
        routes: [
          {
            path: "/panel-admin",
            label: "panel admin",
            component: Paneladmin,
            routes: [
              {
                path: "/add-product",
                label: "add product",
                component: Addproduct,
              },
              {
                path: "/edit-product",
                label: "edit product",
                component: Editproduct,
              }
            ]
          }
        ]
      },
      {
        path: "/form-register-user",
        label: "form register user",
        component: Formregisteruser,
      },
      {
        path: "/form-login-user",
        label: "form login user",
        component: Formloginuser,
      },
      {
        path: "/panel-user",
        label: "panel user",
        component: Paneluser,
        routes:[
          {
            path: "/shopping-cart",
            label: "shopping-cart",
            component: Shoppingcart,
          }
        ]
      }
      
    ]
  }
];
