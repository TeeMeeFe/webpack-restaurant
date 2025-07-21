import { wipeDivContent } from "../index";

export const buildAboutPage = () => {
    const divContent = document.querySelector("div#content");
    wipeDivContent();

    console.log("About page built!");
}
