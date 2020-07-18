import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/DBrecipe/:recipeId",
    name: "DBrecipe",
    component: () => import("./pages/DBRecipePage"),
  },
  {
    path: "/About",
    name: "about",
    component: () => import("./pages/About"),
  },
  {
    path: "/Favorites",
    name: "favorites",
    component: () => import("./pages/Favorites"),
  },
  {
    path: "/PersonalRecipes",
    name: "personal",
    component: () => import("./pages/Personal"),
  },
  {
    path: "/Family",
    name: "family",
    component: () => import("./pages/Family"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
