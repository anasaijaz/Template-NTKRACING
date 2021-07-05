document.addEventListener("DOMContentLoaded", main)


function main() {
    let sections = document.getElementsByTagName("section")
    let nav_links = document.querySelectorAll(".sections li")
    let options = {
        threshold: 0.5
    }

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            let index = entry.target.dataset.index;

            if (!entry.isIntersecting) {
                nav_links[index].classList.remove("active")
                return;
            }
            nav_links[index].classList.add("active")
            entry.target.classList.add("appear")


        })
    }

    let observer = new IntersectionObserver(callback, options)
    for (section of sections) {
        observer.observe(section)

    }
}