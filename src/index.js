import "./styles.css";
import { buildAboutPage } from "./pages/about";
import { buildHomePage } from "./pages/home";
import { buildMenuPage } from "./pages/menu";

const screenController = () => {
    const nav = document.querySelector("nav"); // Prolly not a good idea to go with this low level of specificity but whatever

    nav.addEventListener("click", e => {
        const button = e.target.tagName === "BUTTON";
        // Escape early if it isn't a button
        if(!button) return;

        switch(e.target.classList.value) {
            case "home":
                buildAboutPage();
                break
            case "menu":
                buildHomePage();
                break
            case "about":
                buildMenuPage();
                break
        }
    });
    
    console.log("Script loaded successfully...");
}

screenController();
