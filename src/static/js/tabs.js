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


const theGameHTML = `
<section id="the-game" class="active">
    <h2>The Game</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Molestie nunc non blandit massa. Eget nunc scelerisque viverra mauris in. Augue mauris augue
        neque gravida in fermentum et. Nunc lobortis mattis aliquam faucibus purus in. Amet massa vitae tortor
        condimentum lacinia quis. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Sed vulputate mi sit
        amet mauris commodo quis imperdiet. A pellentesque sit amet porttitor eget. Magna fringilla urna porttitor
        rhoncus dolor. Ultricies integer quis auctor elit sed. Ac orci phasellus egestas tellus rutrum tellus
        pellentesque eu. Massa eget egestas purus viverra accumsan. Suspendisse faucibus interdum posuere lorem
        ipsum dolor. Pharetra convallis posuere morbi leo urna molestie at. Eu ultrices vitae auctor eu augue ut
        lectus arcu bibendum. Mattis pellentesque id nibh tortor id aliquet lectus proin.</p>
    <figure>
        <!--            TODO video 1-->
    </figure>

    <p>Neque egestas congue quisque egestas diam in. Vitae semper quis lectus nulla at volutpat. Quam id leo in
        vitae turpis. Ut ornare lectus sit amet est placerat in egestas. Sed faucibus turpis in eu mi bibendum neque
        egestas. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Bibendum est ultricies integer quis
        auctor elit. Massa enim nec dui nunc mattis enim ut. Cursus turpis massa tincidunt dui ut ornare lectus. A
        scelerisque purus semper eget. Quis enim lobortis scelerisque fermentum dui faucibus in. Porttitor rhoncus
        dolor purus non enim praesent elementum facilisis leo. Ac auctor augue mauris augue neque.</p>
    <figure>
        <!--            TODO video 2-->
    </figure>

    <p>Vitae proin sagittis nisl rhoncus mattis. At augue eget arcu dictum varius duis at. Aliquam ultrices sagittis
        orci a scelerisque purus semper eget duis. Cras tincidunt lobortis feugiat vivamus at augue eget arcu
        dictum. A scelerisque purus semper eget. Eu volutpat odio facilisis mauris sit amet massa vitae. At urna
        condimentum mattis pellentesque id nibh tortor id aliquet. Magna fringilla urna porttitor rhoncus dolor
        purus non enim praesent. Sed nisi lacus sed viverra tellus. Eget aliquet nibh praesent tristique magna sit
        amet purus. Interdum consectetur libero id faucibus nisl tincidunt eget. Tellus in hac habitasse platea.
        Arcu bibendum at varius vel pharetra. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque.</p>
    <!--        TODO audio 1, audio 2-->
</section>
`;

const screenshotsHTML = `
<section id="screenshots">
    <h2>Screenshots</h2>
    <!--        TODO carousel-->
</section>
`;

const subscribeHTML = `
<section id="subscribe">
    <h2>Newsletter</h2>
    <p>Subscribe to our newsletter and be the first to find out all about the game!</p>
    <form action="">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email..."/>
        <button type="submit">Subscribe</button>
    </form>
</section>
`;