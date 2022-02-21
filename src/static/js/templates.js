const image1 = new URL(
    "../img/screenshot1.png?as=webp",
    import.meta.url
);
const image2 = new URL(
    "../img/screenshot2.png?as=webp",
    import.meta.url
);
const image3 = new URL(
    "../img/screenshot3.png?as=webp",
    import.meta.url
);
const video1_src1 = new URL(
    "../media/video1.mp4",
    import.meta.url
);
const video1_src2 = new URL(
    "../media/video1.webm",
    import.meta.url
);
const video2_src1 = new URL(
    "../media/video2.mp4",
    import.meta.url
);
const video2_src2 = new URL(
    "../media/video2.webm",
    import.meta.url
);
const audio1 = new URL(
    "../media/audio1.ogg",
    import.meta.url
);
const audio2 = new URL(
    "../media/audio2.mp3",
    import.meta.url
);

export const theGameHTML = `
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
    <figure class="video">
        <video controls width="480">
            <source src="${video1_src1}" type="video/mp4">
            <source src="${video1_src2}" type="video/webm">
            Sorry, your browser doesn't support embedded videos.
        </video>
        <figcaption>Gameplay video 1</figcaption>
    </figure>

    <p>Neque egestas congue quisque egestas diam in. Vitae semper quis lectus nulla at volutpat. Quam id leo in
        vitae turpis. Ut ornare lectus sit amet est placerat in egestas. Sed faucibus turpis in eu mi bibendum neque
        egestas. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Bibendum est ultricies integer quis
        auctor elit. Massa enim nec dui nunc mattis enim ut. Cursus turpis massa tincidunt dui ut ornare lectus. A
        scelerisque purus semper eget. Quis enim lobortis scelerisque fermentum dui faucibus in. Porttitor rhoncus
        dolor purus non enim praesent elementum facilisis leo. Ac auctor augue mauris augue neque.</p>
    <figure class="video">
        <video controls width="480">
            <source src="${video2_src1}" type="video/mp4">
            <source src="${video2_src2}" type="video/webm">
            Sorry, your browser doesn't support embedded videos.
        </video>
        <figcaption>Gameplay video 2</figcaption>
    </figure>

    <p>Vitae proin sagittis nisl rhoncus mattis. At augue eget arcu dictum varius duis at. Aliquam ultrices sagittis
        orci a scelerisque purus semper eget duis. Cras tincidunt lobortis feugiat vivamus at augue eget arcu
        dictum. A scelerisque purus semper eget. Eu volutpat odio facilisis mauris sit amet massa vitae. At urna
        condimentum mattis pellentesque id nibh tortor id aliquet. Magna fringilla urna porttitor rhoncus dolor
        purus non enim praesent. Sed nisi lacus sed viverra tellus. Eget aliquet nibh praesent tristique magna sit
        amet purus. Interdum consectetur libero id faucibus nisl tincidunt eget. Tellus in hac habitasse platea.
        Arcu bibendum at varius vel pharetra. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque.</p>
    <figure>
        <figcaption>Soundtrack 1</figcaption>
        <audio controls src="${audio1}">
                Your browser does not support the HTML audio element.
        </audio>
    </figure>
        <figure>
        <figcaption>Soundtrack 2</figcaption>
        <audio controls src="${audio2}">
                Your browser does not support the HTML audio element.
        </audio>
    </figure>

</section>
`;

export const screenshotsHTML = `
<section id="screenshots">
    <h2>Screenshots</h2>
    <div class="carousel">
        <div class="carousel-images">
            <img src="${image1}" class="carousel-img" alt="Screenshot 1"/>
            <img src="${image2}" class="carousel-img" alt="Screenshot 2"/>
            <img src="${image3}" class="carousel-img" alt="Screenshot 3"/>
        </div>
        <ul class="carousel-dots">
            <li class="dot active"></li>
            <li class="dot"></li>
            <li class="dot"></li>
        </ul>
    </div>
</section>
`;

export const subscribeHTML = `
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