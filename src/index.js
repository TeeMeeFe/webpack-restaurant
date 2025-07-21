import "./styles.css";
import { buildAboutPage } from "./pages/about";
import { buildHomePage } from "./pages/home";
import { buildMenuPage } from "./pages/menu";

export const wipeDivContent = () => {
    const div = document.querySelector("div#content");

    div.innerHTML = null;
    console.log("Div content wiped successfully");
}

const screenController = () => {
    const nav = document.querySelector("nav"); // Prolly not a good idea to go with this low level of specificity but whatever

    nav.addEventListener("click", e => {
        const button = e.target.tagName === "BUTTON";
        // Escape early if it isn't a button
        if(!button) return;

        switch(e.target.classList.value) {
            case "home":
                buildHomePage();
                break
            case "menu":
                buildMenuPage();
                break
            case "about":
                buildAboutPage();
                break
        }
    });
    
    console.log("Script loaded successfully...");
}

screenController();
