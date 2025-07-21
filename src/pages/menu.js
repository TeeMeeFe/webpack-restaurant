import { wipeDivContent } from "../index";

export const buildMenuPage = () => {
    const divContent = document.querySelector("div#content");
    wipeDivContent();

    console.log("Menu page built!");
};