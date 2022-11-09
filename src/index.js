import { Routes } from "./routes.js"
const routes = new Routes()
routes.add("/", "/pages/home.html")
routes.add("/universe", "/pages/universe.html")
routes.add("/exploration", "/pages/exploration.html")
routes.add("/404", "/pages/404.html")

routes.handle()
window.onpopstate = () => routes.handle();
window.route = () => routes.route()