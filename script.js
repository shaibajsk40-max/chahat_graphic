// ==========================================
// IMAGE REVIEW POPUP
// ==========================================

const reviewImages =
    document.querySelectorAll(".review-card img");

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const modalClose =
    document.getElementById("modalClose");


reviewImages.forEach(function (image) {

    image.addEventListener("click", function () {

        modalImage.src = image.src;

        imageModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


modalClose.addEventListener("click", function () {

    imageModal.classList.remove("active");

    document.body.style.overflow = "";

});


imageModal.addEventListener("click", function (event) {

    if (event.target === imageModal) {

        imageModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// ==========================================
// JOIN MODAL
// ==========================================

const joinButton =
    document.getElementById("joinButton");

const whatsappButton =
    document.getElementById("whatsappButton");

const joinModal =
    document.getElementById("joinModal");

const popupClose =
    document.getElementById("popupClose");

const popupCancel =
    document.getElementById("popupCancel");

const confirmJoin =
    document.getElementById("confirmJoin");


// Open popup

function openJoinPopup() {

    joinModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


// Close popup

function closeJoinPopup() {

    joinModal.classList.remove("active");

    document.body.style.overflow = "";

}


// Main Join Button

joinButton.addEventListener(
    "click",
    openJoinPopup
);


// WhatsApp Button

whatsappButton.addEventListener(
    "click",
    openJoinPopup
);


// Close button

popupClose.addEventListener(
    "click",
    closeJoinPopup
);


// Maybe Later

popupCancel.addEventListener(
    "click",
    closeJoinPopup
);


// ==========================================
// WHATSAPP JOIN
// ==========================================

confirmJoin.addEventListener(
    "click",
    function () {

        /*
        IMPORTANT:

        Neeche apna WhatsApp number dalein.

        Example:
        919876543210

        Country code ke saath number likhna hai.
        + ya spaces nahi.
        */

        const phoneNumber =
            "917319005733";


        const message =
            "Assalamu Alaikum! I want to join Creative Chahat Academy. Please share the course details with me.";


        const whatsappURL =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            encodeURIComponent(message);


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);


// ==========================================
// ESC KEY
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            imageModal.classList.remove("active");

            joinModal.classList.remove("active");

            document.body.style.overflow = "";

        }

    }
);


// ==========================================
// SCROLL REVEAL
// ==========================================

const reviewCards =
    document.querySelectorAll(".review-card");


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


reviewCards.forEach(
    function (card, index) {

        card.style.transitionDelay =
            `${index * 0.05}s`;

        revealObserver.observe(card);

    }
);


// ==========================================
// VIDEO AUTO PAUSE
// ==========================================

const videos =
    document.querySelectorAll("video");


videos.forEach(function (video) {

    video.addEventListener(
        "play",
        function () {

            videos.forEach(
                function (otherVideo) {

                    if (otherVideo !== video) {

                        otherVideo.pause();

                    }

                }
            );

        }
    );

});