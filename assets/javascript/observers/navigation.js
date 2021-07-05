document.addEventListener("DOMContentLoaded", main)


function main() {
    let section = document.querySelector(".text-wrapper")
    let navbar = document.getElementsByTagName("header")[0]

    options = {
        rootMargin: "-40% 0px -40% 0px"
    }
    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                navbar.classList.add("overlay")
            } else {
                navbar.classList.remove("overlay")
            }



        })
    }
    let observer = new IntersectionObserver(callback, options)
    observer.observe(section)
}