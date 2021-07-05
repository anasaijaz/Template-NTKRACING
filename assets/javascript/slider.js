document.addEventListener("DOMContentLoaded", main)

const DUMMY_DATA = [{
        id: 0,
        car_name: "Sedan",
        car_description: "Nonumy sed accusam diam dolores lorem ipsum amet accusam rebum ipsum. Justo sed eirmod vero elitr dolor aliquyam lorem stet et. Sea consetetur sea at consetetur sit erat ea takimataGlaube heut vaterland freunde du die so, dich die des feuchten die die nicht wangen dir es. Dich der dich..",
        car_specification: "Nonumy sed accusam diam dolores lorem ipsum amet accusam rebum ipsum. Justo sed eirmod vero elitr dolor aliquyam lorem stet et. Sea consetetur sea at consetetur sit erat ea takimata.Ever passed from thou pillared shamed sea departed. Lowly a his or and his soon. Was native for him long.",
        car_image_uri: "./assets/images/cars/hero.png"
    },
    {
        id: 1,
        car_name: "Bolero",
        car_description: 'Doiseaux je je des jaune perdu la. Lents les enfants verts ont,',
        car_specification: "Consetetur est sadipscing gubergren tempor lorem. Accusam amet stet sit amet sanctus sit, sed labore voluptua takimata voluptua sed, ipsum sea dolor voluptua nonumy, at voluptua.",
        car_image_uri: "./assets/images/cars/moto.png"
    },
    {
        id: 2,
        car_name: "Mercedes Benz",
        car_description: "A muerte perfil repartiendo en pies imperturbable gustada resonancia los que, mudas nino de a latido de que sangre torre diana, mármol ansioso las..",
        car_specification: "O scegegkel syrolmol ezes erzem buthuruth engumet walasth, nym ygoz en ulud niha scegegkel hullothya, keseruen wklelue fyon fyom hol kyniuhhad iumhumnok thekunched.",
        car_image_uri: "./assets/images/cars/sedan.png"
    },
    {
        id: 3,
        car_name: "Range Rover",
        car_description: 'Doiseaux je je des jaune perdu la. Lents les enfants verts ont,',
        car_specification: "Consetetur est sadipscing gubergren tempor lorem. Accusam amet stet sit amet sanctus sit, sed labore voluptua takimata voluptua sed, ipsum sea dolor voluptua nonumy, at voluptua.",
        car_image_uri: "./assets/images/cars/super.png"
    }
];



function initialize(splide, product_list, car_name, car_description, car_specification) {

    car_name.textContent = DUMMY_DATA[splide.index].car_name
    car_description.textContent = DUMMY_DATA[splide.index].car_description
    car_specification.textContent = DUMMY_DATA[splide.index].car_specification

    for (let car of DUMMY_DATA) {
        product_list.insertAdjacentHTML("beforeend", `<p data-car_id=${car.id}>${car.car_name}</p>`)
        splide.add(`<li class="splide__slide"><img src='${car.car_image_uri}' /></li>`);

    }





}


function main() {

    let product_list = document.querySelector(".product_list");
    let car_name = document.getElementById("car_name")
    let car_description = document.getElementById("car_description")
    let car_specification = document.getElementById("car_specification")
    let nextArrow = document.querySelector(".splide__arrow--next");
    let prevArrow = document.querySelector(".splide__arrow--prev");





    let splide = new Splide('.splide', {
        width: "100%",
        height: "100%",
        arrows: false,
        interval: "3000",
    }).mount();

    initialize(splide, product_list, car_name, car_description, car_specification);
    updateCarList()
    nextArrow.addEventListener('click', () => {
        splide.go("-")
    })


    prevArrow.addEventListener('click', () => {
        splide.go("+")
    })

    splide.on("moved updated", () => {
        car_name.textContent = DUMMY_DATA[splide.index].car_name
        car_description.textContent = DUMMY_DATA[splide.index].car_description
        car_specification.textContent = DUMMY_DATA[splide.index].car_specification
        updateCarList()
    })

    function updateCarList() {
        let items = product_list.children
        for (let i = 0; i < items.length; i++) {
            car = items[i]
            if (car.dataset.car_id == splide.index) {
                car.style.color = "red";
            } else {
                car.style.color = "black"
            }
        }
    }

}