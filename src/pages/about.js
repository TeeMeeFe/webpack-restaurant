import { wipeDivContent } from "../index";

export const buildAboutPage = () => {
    const divContent = document.querySelector("div#content");
    wipeDivContent();

    console.time("About page built! Took");

    const buildContactContainer = () => {
        const outerDiv1 = document.createElement("div");
        outerDiv1.classList = "contact-container outer-container container";
        const innerDiv1 = document.createElement("div");
        innerDiv1.classList = "inner-container container";

        const h2 = document.createElement("h2");
        h2.textContent = "Contact";

        const h3_manager = document.createElement("h3");
        h3_manager.textContent = "Manager — Momma bear";

        const ul_manager = document.createElement("ul");
        ul_manager.classList = "ul-left";
        const li_manager_item1 = document.createElement("li");
        li_manager_item1.textContent = "Tel : (+54) 355 - 123 4567";
        const li_manager_item2 = document.createElement("li");
        li_manager_item2.textContent = "Address : 1337 Leet street, Some city, In a country."

        ul_manager.append(li_manager_item1, li_manager_item2);
        innerDiv1.append(h2, h3_manager, ul_manager);

        const innerDiv2 = document.createElement("div");
        innerDiv2.classList = "inner-container container";

        const h3_owner = document.createElement("h3");
        h3_owner.textContent = "Owner — Pappa bear";

        const ul_owner = document.createElement("ul");
        ul_owner.classList = "ul-left";
        const li_owner_item1 = document.createElement("li");
        li_owner_item1.textContent = "Tel : (+54) 351 - 890 1234";
        const li_owner_item2 = document.createElement("li");
        li_owner_item2.textContent = "Address : 1337 Leet street, Some city, In a country.";

        ul_owner.append(li_owner_item1, li_owner_item2);
        innerDiv2.append(h3_owner, ul_owner);

        const innerDiv3 = document.createElement("div");
        innerDiv3.classList = "inner-container container";

        const h3_chef = document.createElement("h3");
        h3_chef.textContent = "Chef — Cub bear";

        const ul_chef = document.createElement("ul");
        ul_chef.classList = "ul-left";

        const li_chef_item1 = document.createElement("li");
        li_chef_item1.textContent = "Tel : (+54) 123 - 890 1234";
        const li_chef_item2 = document.createElement("li");
        li_chef_item2.textContent = "Address : 1337 Leet street, Some city, In a country.";

        ul_chef.append(li_chef_item1, li_chef_item2);
        innerDiv3.append(h3_chef, ul_chef);

        const outerDiv2 = document.createElement("div");
        outerDiv2.classList = "location-container outer-container container";
        const innerDiv4 = document.createElement("div");
        innerDiv4.classList = "inner-container container";

        const h2_location = document.createElement("h2");
        h2_location.textContent = "Location";

        const h3_location = document.createElement("h3");
        h3_location.textContent = "123 Some street, Fake city, In a country.";

        innerDiv4.append(h2_location, h3_location);

        outerDiv1.append(innerDiv1, innerDiv2, innerDiv3);
        outerDiv2.append(innerDiv4);
        divContent.append(outerDiv1, outerDiv2);
    };

    buildContactContainer();
    console.timeEnd("About page built! Took");
}
