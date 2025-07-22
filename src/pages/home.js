import { wipeDivContent } from "../index";

export const buildHomePage = () => {
    const divContent = document.querySelector("div#content");
    wipeDivContent();

    console.time("Home page built! Took")

    // Methods that build the entire content page, in order
    const buildHeader = () => {
        const div = document.createElement("div");
        div.classList = "about-heading-container outer-container container";
        const h1 = document.createElement("h1");
        h1.classList = "inner-container";
        h1.textContent = "TeeMeeFe's biggest restaurant site ever";

        div.appendChild(h1);
        divContent.appendChild(div);
        
        buildReview();
    };

    const buildReview = () => {
        const outerDiv = document.createElement("div");
        outerDiv.classList = "review-container outer-container container";
        const innerDiv = document.createElement("div");
        innerDiv.classList = "inner-review-container inner-container container";
        const h2 = document.createElement("h2");
        h2.textContent =   "If you're a food lover or just someone who appreciates brilliant digital experiences, \
                            TeeMeeFe's Biggest Restaurant Website Ever is a must-visit destination. \
                            This isn't just a restaurant website—it's a culinary universe brought to life online."
        const h3 = document.createElement("h3");
        const i = document.createElement("i");
        i.textContent = "Some dude named gpt idk his full name";

        h3.appendChild(i);
        innerDiv.append(h2, h3);
        outerDiv.appendChild(innerDiv);
        divContent.appendChild(outerDiv);

        buildOpenHours();
    };

    const buildOpenHours = () => {
        const outerDiv = document.createElement("div");
        outerDiv.classList = "openhours-container outer-container container";
        const innerDiv = document.createElement("div");
        innerDiv.classList = "openhours-inner-container inner-container";

        const h2 = document.createElement("h2");
        h2.textContent = "Open hours";

        const ul = document.createElement("ul");

        const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        for(let e = 0; e < 7; e++) {
            const li = document.createElement("li");
            
            if(e < 4) li.textContent = daysOfTheWeek[e] + ": 9am to 3pm";
            else li.textContent = daysOfTheWeek[e] + ": 7pm to 3am";

            ul.appendChild(li);
        }

        innerDiv.append(h2, ul);
        outerDiv.appendChild(innerDiv);
        divContent.appendChild(outerDiv);

        buildLocation();
    };

    const buildLocation = () => {
        const outerDiv = document.createElement("div");
        outerDiv.classList = "location-container outer-container container";
        const innerDiv = document.createElement("div");
        innerDiv.classList = "location-inner-container inner-container";

        const textDiv = document.createElement("div");
        textDiv.classList = "location";
        textDiv.textContent = "123 Some street, Fake city, In a country.";
        const h2 = document.createElement("h2");
        h2.textContent = "Location";

        innerDiv.append(h2, textDiv);
        outerDiv.appendChild(innerDiv);
        divContent.appendChild(outerDiv);
    };

    buildHeader();

    console.timeEnd("Home page built! Took");
};