import "./styles.css";
import { buildAboutPage } from "./pages/about";
import { buildHomePage } from "./pages/home";
import { buildMenuPage } from "./pages/menu";

buildAboutPage();
buildHomePage();
buildMenuPage();

console.log("Script loaded successfully...");