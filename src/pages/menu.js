import { wipeDivContent } from "../index";

export const buildMenuPage = () => {
    const divContent = document.querySelector("div#content");
    wipeDivContent();

    console.time("Menu page built! Took")

    const buildPizzaContainer = () => {
        const outerDiv = document.createElement("div");
        outerDiv.classList = "pizza-outer-container outer-container container";
        const innerDiv = document.createElement("div");
        innerDiv.classList = "inner-container container";

        const h2 = document.createElement("h2");
        h2.textContent = "Pizza";
        const h3 = document.createElement("h3");
        h3.textContent = "A timeless classic that brings people together. \
                        Crafted on a golden, wood-fired crust—crispy on the outside, \
                        soft and airy on the inside—our pizza is layered with velvety tomato sauce, melted mozzarella, \
                        and your choice of mouthwatering toppings. From the smoky bite of pepperoni to the freshness of basil and cherry tomatoes, \
                        very slice delivers a perfect balance of flavor, texture, and aroma. Finished with a drizzle of olive oil and a sprinkle of herbs, \
                        it’s comfort food at its finest."

        innerDiv.append(h2, h3);
        outerDiv.appendChild(innerDiv);
        divContent.appendChild(outerDiv);

        buildSpaghettiContainer();
    };

    const buildSpaghettiContainer = () => {
        const outerDiv = document.createElement("div");
        outerDiv.classList = "spaghetti-outer-container outer-container container";
        const innerDiv = document.createElement("div");
        innerDiv.classList = "inner-container container";

        const h2 = document.createElement("h2");
        h2.textContent = "Spaghetti";
        const h3 = document.createElement("h3");
        h3.textContent = "A true Italian classic, served with passion. \
                        Our spaghetti is cooked to al dente perfection, offering just the right bite. \
                        It's gently tossed in a rich, slow-simmered tomato sauce infused with garlic, herbs, and a hint of olive oil. \
                        Whether topped with hearty meatballs, fresh basil, or a dusting of aged Parmesan cheese, every forkful delivers warmth, \
                        comfort, and bold, traditional flavor. Simple, satisfying, and timeless—just the way spaghetti should be.";

        innerDiv.append(h2, h3);
        outerDiv.appendChild(innerDiv);
        divContent.appendChild(outerDiv);

        buildHamburgerContainer();
    };

    const buildHamburgerContainer = () => {
        const outerDiv = document.createElement("div");
        outerDiv.classList = "hamburger-outer-container outer-container container";
        const innerDiv = document.createElement("div");
        innerDiv.classList = "inner-container container";

        const h2 = document.createElement("h2");
        h2.textContent = "Hamburger";
        const h3 = document.createElement("h3");
        h3.textContent = "The king of comfort food. \
                        Sink your teeth into a juicy, flame-grilled beef patty, perfectly seasoned and stacked on a freshly toasted brioche bun. \
                        Layered with crisp lettuce, ripe tomato, tangy pickles, melted cheddar cheese, \
                        and a dollop of our signature sauce, every bite bursts with flavor and texture. \
                        Whether classic or fully loaded, our hamburger is a mouthwatering experience that satisfies every craving.";

        innerDiv.append(h2, h3);
        outerDiv.appendChild(innerDiv);
        divContent.appendChild(outerDiv);
    };
 
    buildPizzaContainer();
    console.timeEnd("Menu page built! Took")
};