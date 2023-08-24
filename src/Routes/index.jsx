import { configRouter } from "../config";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Add from "../pages/add/Add";
import Message from "../pages/message/Message";
import MyGigs from "../pages/myGigs/MyGigs";
import Orders from "../pages/orders/Orders";

const publicRoutes = [
  { path: configRouter.home, component: Home },
  { path: configRouter.listProduct, component: Product },
  { path: configRouter.singleProduct, component: SingleProduct },
  { path: configRouter.add, component: Add },
  { path: configRouter.mygigs, component: MyGigs },
  { path: configRouter.message, component: Message },
  { path: configRouter.orders, component: Orders },
];

export { publicRoutes };
