document.addEventListener("DOMContentLoaded", main)








function main() {

    let bottomsheethandler = document.getElementById("bottomsheetbutton");
    let bottomsheet = document.querySelector("#contact .secondary-container")
    let close = document.querySelector(".close")

    close.addEventListener("click", () => {
        bottomsheet.classList.remove("visible")
    })

    bottomsheethandler.addEventListener("click", () => {
        bottomsheet.classList.add("visible")

    })






    // Wrap every letter in a span
    var textWrapper = document.querySelector('.heading .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
        .add({
            targets: ".heading",
            opacity: [0, 1],
            duration: 1000,
            easing: "easeInOutQuad"
        })
        .add({
            targets: '.heading .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: (el, i) => 80 * (i + 1)
        })


}