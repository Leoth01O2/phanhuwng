let currentAudio = null;

/* cập nhật progress */

setInterval(() => {

    if (currentAudio) {

        let container = currentAudio.parentElement;

        let bar = container.querySelector(".progress");

        let percent = (currentAudio.currentTime / currentAudio.duration) * 100;

        bar.style.width = percent + "%";

    }

}, 200);

function toggleMusic(id, btn) {

    let audio = document.getElementById(id);
    let wave = btn.parentElement.querySelector(".music-wave");

    /* nếu đang phát bài khác */

    if (currentAudio && currentAudio !== audio) {

        currentAudio.pause();
        currentAudio.currentTime = 0;

        let oldBtn = document.querySelector(".play-btn.playing");
        if (oldBtn) {
            oldBtn.innerText = "▶";
            oldBtn.classList.remove("playing");
        }

        let oldWave = document.querySelector(".music-wave.active");
        if (oldWave) {
            oldWave.style.display = "none";
            oldWave.classList.remove("active");
        }

    }

    /* toggle */

    if (audio.paused) {

        audio.play();

        btn.innerText = "⏸";
        btn.classList.add("playing");

        wave.style.display = "inline";
        wave.classList.add("active");

        currentAudio = audio;

        /* highlight bài đang phát */

        document.querySelectorAll(".music-item")
            .forEach(i => i.classList.remove("playing"));

        btn.closest(".music-item")
            .classList.add("playing");

        let title = btn.getAttribute("data-title");
        document.getElementById("nowPlayingTitle").innerText = title;

    } else {

        audio.pause();

        btn.innerText = "▶";
        btn.classList.remove("playing");

        wave.style.display = "none";
        wave.classList.remove("active");

        currentAudio = null;

        btn.closest(".music-item")
            .classList.remove("playing");

        document.getElementById("nowPlayingTitle").innerText = "Nothing";

    }

}

                                 /* GALLERY */
function openImage(img) {

    let viewer = document.getElementById("imageViewer");
    let viewerImg = document.getElementById("viewerImg");

    viewer.style.display = "flex";
    viewerImg.src = img.src;

}

function closeImage() {

    document.getElementById("imageViewer").style.display = "none";

}


                                /* GUESTBOOK */
function addMessage() {

    let name = document.getElementById("guestName").value.trim();

    let msg = document.getElementById("guestMessage").value.trim();

    if (!name || !msg) return;

    let container = document.getElementById("guestMessages");

    let div = document.createElement("div");

    div.className = "guest-item";

    div.innerHTML =
        "<b>" + name + "</b><p>" + msg + "</p>";

    container.prepend(div);

    document.getElementById("guestName").value = "";
    document.getElementById("guestMessage").value = "";

}