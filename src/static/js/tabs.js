import {theGameHTML, screenshotsHTML, subscribeHTML} from "./templates";

const theGameTab = document.querySelector("#the-game-tab");
const screenshotsTab = document.querySelector("#screenshots-tab");
const subscribeTab = document.querySelector("#subscribe-tab");

const main = document.querySelector("main");

for (let element of [theGameTab, screenshotsTab, subscribeTab]) {
    element.addEventListener("click", switchTabs);
}

function switchTabs(event) {
    main.innerHTML = "";
    if (event) {
        event.preventDefault();
        switch (event.currentTarget) {
            case theGameTab:
                main.insertAdjacentHTML("afterbegin", theGameHTML);
                theGameTab.classList.add("active");
                screenshotsTab.classList.remove("active");
                subscribeTab.classList.remove("active");
                break;
            case screenshotsTab:
                main.insertAdjacentHTML("afterbegin", screenshotsHTML);
                screenshotsTab.classList.add("active");
                theGameTab.classList.remove("active");
                subscribeTab.classList.remove("active");
                break;
            case subscribeTab:
                main.insertAdjacentHTML("afterbegin", subscribeHTML);
                subscribeTab.classList.add("active");
                screenshotsTab.classList.remove("active");
                theGameTab.classList.remove("active");
                break;
            default:
                break;
        }
    } else {
        main.insertAdjacentHTML("afterbegin", theGameHTML);
        theGameTab.classList.add("active");
        screenshotsTab.classList.remove("active");
        subscribeTab.classList.remove("active");
    }
}

document.addEventListener("DOMContentLoaded", () => switchTabs());